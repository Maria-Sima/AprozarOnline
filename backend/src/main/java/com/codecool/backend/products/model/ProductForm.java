package com.codecool.backend.products.model;

import com.codecool.backend.products.model.types.ProductType;

public record ProductForm(
        String name,
        Double quantity,

        Double price,

        ProductType type,

        String productDescription
) {

}
