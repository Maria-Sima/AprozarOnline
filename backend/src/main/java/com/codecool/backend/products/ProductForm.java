package com.codecool.backend.products;

import com.codecool.backend.products.Types.ProductType;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public record ProductForm(
        String name,
        Double quantity,

        Double price,

        ProductType type,

        String productDescription
) {

}
