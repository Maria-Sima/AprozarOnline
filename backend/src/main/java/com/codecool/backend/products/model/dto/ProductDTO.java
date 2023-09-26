package com.codecool.backend.products.model.dto;

import com.codecool.backend.products.model.types.ProductType;

public record ProductDTO(
        Long id,
        Double price,
        Double quantity,
        ProductType productType,

        String name,

        Long sellerId,
        String photoUrl

        ) {


}
