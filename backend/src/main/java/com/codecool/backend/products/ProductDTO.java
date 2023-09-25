package com.codecool.backend.products;

import com.codecool.backend.products.types.ProductType;

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
