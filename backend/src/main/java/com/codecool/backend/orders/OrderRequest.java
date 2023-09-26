package com.codecool.backend.orders;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class OrderRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
    private List<CartItem> cartItems;

    private Double total;
    private String addressToShipTo;
    private Long userId;
    private PaymentMethod paymentMethod;
    private String currency;
    private String description;
    private String paymentId;
    private OrderStatus orderStatus=OrderStatus.PENDING;

    public OrderRequest(List<CartItem> cartItems,
                        Double total, String addressToShipTo, Long userId,
                        PaymentMethod paymentMethod, String currency,
                        String description,String paymentId) {
        this.cartItems = cartItems;
        this.total = total;
        this.addressToShipTo = addressToShipTo;
        this.userId = userId;
        this.paymentMethod = paymentMethod;
        this.currency = currency;
        this.description = description;
        this.paymentId = paymentId;
    }
}
