package com.codecool.backend.products.model.dto;

import com.codecool.backend.products.model.types.ProductCategory;

public record ProductDTO(
        Long id,
        Double price,
        Double quantity,
        ProductCategory productCategory,

        String name,

        Long sellerId,
        String photoUrl

        ) {


}
