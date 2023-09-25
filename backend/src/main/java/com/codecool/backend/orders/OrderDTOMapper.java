package com.codecool.backend.orders;

import org.springframework.stereotype.Service;

import java.util.function.Function;
@Service
public class OrderDTOMapper implements Function<OrderRequest,OrderDTO> {
    @Override
    public OrderDTO apply(OrderRequest order) {
        return new OrderDTO(
                order.getOrderId(),
                order.getCartItems(),
                order.getAddressToShipTo(),
                order.getUserId(),
                order.getPaymentMethod().name(),
                order.getPaymentId()
        );
    }
}
