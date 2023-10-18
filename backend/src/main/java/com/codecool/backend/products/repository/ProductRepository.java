package com.codecool.backend.products.repository;

import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.model.types.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findProductsByProductCategory(ProductCategory category);

    List<Product> findProductsByUserId(Long userId);


    List<Product> findProductsByNameContainingIgnoreCase(String name);

    boolean existsProductById(Long productId);


}
