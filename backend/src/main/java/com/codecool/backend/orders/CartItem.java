package com.codecool.backend.orders;

import com.codecool.backend.products.model.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne()
    @JoinColumn()
    private Product product;
    private Integer quantity = 1;
    @ManyToOne()
    @JoinColumn()
    private OrderRequest order;

}