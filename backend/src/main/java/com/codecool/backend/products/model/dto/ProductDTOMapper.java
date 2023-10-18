package com.codecool.backend.products.model.dto;

import com.codecool.backend.products.model.Product;
import org.springframework.stereotype.Service;

import java.util.function.Function;
@Service
public class ProductDTOMapper implements Function<Product, ProductDTO> {
    @Override
    public ProductDTO apply(Product product) {
        return new ProductDTO(
                product.getId(),
                product.getPrice(),
                product.getQuantity(),
                product.getProductCategory(),
                product.getName(),
                product.getUserId(),
                product.getProductUrl()
        );
    }
}
