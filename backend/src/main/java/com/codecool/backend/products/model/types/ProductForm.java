package com.codecool.backend.products.model.types;

import org.springframework.web.multipart.MultipartFile;

public record ProductForm(
        MultipartFile file,
        String productName,
        Double quantity,

        Double price,

        ProductCategory category,

        String productDescription,

        Long sellerId
) {

}
