package com.codecool.backend.products;

import com.codecool.backend.products.types.ProductType;

public record ProductForm(
        String name,
        Double quantity,

        Double price,

        ProductType type,

        String productDescription
) {

}
