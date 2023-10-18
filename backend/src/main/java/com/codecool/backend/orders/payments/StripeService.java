package com.codecool.backend.orders.payments;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.PaymentMethod;
import com.stripe.model.Token;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StripeService implements PaymentService {
    @Value("${stripe.key}")
    private String stripeApiKey;


    @PostConstruct
    public void init() {

        Stripe.apiKey = stripeApiKey;
    }


    public StripeTokenDTO createCardToken(StripeTokenDTO model) {

        try {
            Map<String, Object> card = new HashMap<>();
            card.put("number", model.getCardNumber());
            card.put("exp_month", Integer.parseInt(model.getExpMonth()));
            card.put("exp_year", Integer.parseInt(model.getExpYear()));
            card.put("cvc", model.getCvc());
            Map<String, Object> params = new HashMap<>();
            params.put("card", card);
            Token token = Token.create(params);
            if (token != null && token.getId() != null) {
                model.setSuccess(true);
                model.setToken(token.getId());
            }
            return model;
        } catch (StripeException e) {
            System.out.println("StripeService (createCardToken)"+ e);
            throw new RuntimeException(e.getMessage());
        }

    }

    public String charge(StripeChargeDTO chargeRequest) {


        try {

            Map<String, Object> chargeParams = new HashMap<>();
            chargeParams.put("amount", (int) (chargeRequest.getAmount() * 100));
            chargeParams.put("currency", "USD");
            chargeParams.put("description", "Payment for id " + chargeRequest.getAdditionalInfo().getOrDefault("ID_TAG", ""));
            chargeParams.put("source", chargeRequest.getStripeToken());
            Map<String, Object> metaData = new HashMap<>();
            metaData.put("id", chargeRequest.getChargeId());
            metaData.putAll(chargeRequest.getAdditionalInfo());
            chargeParams.put("metadata", metaData);
            Charge charge = Charge.create(chargeParams);
            chargeRequest.setMessage(charge.getOutcome().getSellerMessage());

            if (charge.getPaid()) {
                chargeRequest.setChargeId(charge.getId());
                chargeRequest.setSuccess(true);

            }
            return charge.getId();
        } catch (StripeException e) {
            System.out.println("StripeService (charge)" + e);
            throw new RuntimeException(e.getMessage());
        }

    }


    private PaymentMethod createPaymentMethod(StripeSubscriptionDTO subscriptionDto) {

        try {

            Map<String, Object> card = new HashMap<>();

            card.put("number", subscriptionDto.cardNumber());
            card.put("exp_month", Integer.parseInt(subscriptionDto.expMonth()));
            card.put("exp_year", Integer.parseInt(subscriptionDto.expYear()));
            card.put("cvc", subscriptionDto.cvc());

            Map<String, Object> params = new HashMap<>();
            params.put("type", "card");
            params.put("card", card);

            return PaymentMethod.create(params);

        } catch (StripeException e) {
            System.out.println("StripeService (createPaymentMethod)"+ e);
            throw new RuntimeException(e.getMessage());
        }
    }

    private Customer createCustomer(PaymentMethod paymentMethod, StripeSubscriptionDTO subscriptionDto) {

        try {

            Map<String, Object> customerMap = new HashMap<>();
            customerMap.put("name", subscriptionDto.username());
            customerMap.put("email", subscriptionDto.email());
            customerMap.put("payment_method", paymentMethod.getId());

            return Customer.create(customerMap);
        } catch (StripeException e) {
            System.out.println("StripeService (createCustomer)"+ e);
            throw new RuntimeException(e.getMessage());
        }

    }

    private PaymentMethod attachCustomerToPaymentMethod(Customer customer, PaymentMethod paymentMethod) {

        try {

            paymentMethod = com.stripe.model.PaymentMethod.retrieve(paymentMethod.getId());

            Map<String, Object> params = new HashMap<>();
            params.put("customer", customer.getId());
            paymentMethod = paymentMethod.attach(params);
            return paymentMethod;


        } catch (StripeException e) {
            System.out.println("StripeService (attachCustomerToPaymentMethod)"+ e);
            throw new RuntimeException(e.getMessage());
        }

    }


}


