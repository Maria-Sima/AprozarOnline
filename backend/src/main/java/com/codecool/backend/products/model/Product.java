package com.codecool.backend.products.model;

import com.codecool.backend.products.model.types.ProductType;
import com.codecool.backend.orders.CartItem;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double price;
    private double quantity;
    private ProductType productType;

    @OneToMany(fetch = FetchType.LAZY,mappedBy ="product",orphanRemoval = true )
    private List<CartItem> cartItem;
    private  String name;
    private Long userId;

    private String productDescription;

    private String productUrl;

}
