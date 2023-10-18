package com.codecool.backend.products.model.types;

import com.codecool.backend.products.model.types.ProductCategory;

public record ProductForm(
        String name,
        Double quantity,

        Double price,

        ProductCategory category,

        String productDescription,

        Long sellerId
) {

}
