package com.codecool.backend.orders;
import lombok.Data;
import java.io.Serializable;
import java.util.List;

@Data
public class OrderDTO implements Serializable {
    private final Long orderId;
    private final List<CartItem> items;
    private final String address;
    private final Long userID;
    private final String paymentMethod;
    private final String paymentId;
}
