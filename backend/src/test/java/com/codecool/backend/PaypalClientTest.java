package com.codecool.backend;

import com.codecool.backend.orders.OrderDTO;
import com.codecool.backend.orders.OrderResponseDTO;
import com.codecool.backend.orders.payments.paypal.AccessTokenResponseDTO;
import com.codecool.backend.orders.payments.paypal.PayPalHttpClient;
import com.codecool.backend.orders.payments.paypal.PaypalConfiguration;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class PaypalClientTest {
    @Mock
    private HttpClient httpClient;

    @Mock
    private PaypalConfiguration paypalConfiguration;

    @Mock
    private ObjectMapper objectMapper;

    private PayPalHttpClient payPalHttpClient;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        payPalHttpClient = new PayPalHttpClient(paypalConfiguration, objectMapper);
//        payPalHttpClient.httpClient = httpClient;
    }
    @Test
    void testGetAccessToken() throws Exception {
        // Mock the necessary objects and responses
        AccessTokenResponseDTO expectedResponse = new AccessTokenResponseDTO();
        String responseBody = "{\"access_token\":\"<access_token>\",\"expires_in\":3600}";

        HttpResponse<String> httpResponse = mock(HttpResponse.class);
        when(httpResponse.body()).thenReturn(responseBody);

        HttpRequest.Builder requestBuilder = mock(HttpRequest.Builder.class);
        when(httpClient.send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class))).thenReturn(httpResponse);
        when(httpClient.newBuilder()).thenReturn(requestBuilder);
        when(requestBuilder.uri(any(URI.class))).thenReturn(requestBuilder);
        when(requestBuilder.header(anyString(), anyString())).thenReturn(requestBuilder);
        when(requestBuilder.POST(any(HttpRequest.BodyPublisher.class))).thenReturn(requestBuilder);
        when(requestBuilder.build()).thenReturn(mock(HttpRequest.class));

        when(objectMapper.readValue(responseBody, AccessTokenResponseDTO.class)).thenReturn(expectedResponse);

        // Call the method to be tested
        AccessTokenResponseDTO actualResponse = payPalHttpClient.getAccessToken();

        // Assertions
        verify(httpClient).send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class));
        verify(requestBuilder).uri(any(URI.class));
        verify(requestBuilder).header(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
        verify(requestBuilder).header(HttpHeaders.ACCEPT_LANGUAGE, "en_US");
        verify(requestBuilder).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_FORM_URLENCODED_VALUE);
        verify(requestBuilder).POST(any(HttpRequest.BodyPublisher.class));
        verify(requestBuilder).build();
        verify(objectMapper).readValue(responseBody, AccessTokenResponseDTO.class);
        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    void testCreateOrder() throws Exception {
        // Mock the necessary objects and responses
        AccessTokenResponseDTO accessTokenDto = new AccessTokenResponseDTO();
        accessTokenDto.setAccessToken("<access_token>");

        OrderDTO orderDTO = new OrderDTO();
        String payload = objectMapper.writeValueAsString(orderDTO);

        OrderResponseDTO expectedResponse = new OrderResponseDTO();
        String responseBody = "{\"orderId\":\"<order_id>\",\"status\":\"created\"}";

        HttpResponse<String> httpResponse = mock(HttpResponse.class);
        when(httpResponse.body()).thenReturn(responseBody);

        HttpRequest.Builder requestBuilder = mock(HttpRequest.Builder.class);
        when(httpClient.send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class))).thenReturn(httpResponse);
        when(httpClient.newBuilder()).thenReturn(requestBuilder);
        when(requestBuilder.uri(any(URI.class))).thenReturn(requestBuilder);
        when(requestBuilder.header(anyString(), anyString())).thenReturn(requestBuilder);
        when(requestBuilder.POST(any(HttpRequest.BodyPublisher.class))).thenReturn(requestBuilder);
        when(requestBuilder.build()).thenReturn(mock(HttpRequest.class));

        when(payPalHttpClient.getAccessToken()).thenReturn(accessTokenDto);
        when(objectMapper.writeValueAsString(orderDTO)).thenReturn(payload);
        when(objectMapper.readValue(responseBody, OrderResponseDTO.class)).thenReturn(expectedResponse);

        // Call the method to be tested
        OrderResponseDTO actualResponse = payPalHttpClient.createOrder(orderDTO);

        // Assertions
        verify(payPalHttpClient).getAccessToken();
        verify(objectMapper).writeValueAsString(orderDTO);
        verify(httpClient).send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class));
        verify(requestBuilder).uri(any(URI.class));
        verify(requestBuilder).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        verify(requestBuilder).header(HttpHeaders.AUTHORIZATION, "Bearer " + accessTokenDto.getAccessToken());
        verify(requestBuilder).POST(any(HttpRequest.BodyPublisher.class));
        verify(requestBuilder).build();
        verify(objectMapper).readValue(responseBody, OrderResponseDTO.class);
        assertEquals(expectedResponse, actualResponse);
    }
}
