package com.codecool.backend.products.repository;

import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.model.types.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findProductsByProductCategory(ProductCategory category, Pageable pageable);

    Page<Product> findProductsByUserId(Long userId,Pageable pageable);


    Page<Product> findProductsByNameContainingIgnoreCase(String name,Pageable pageable);

    boolean existsProductById(Long productId);


}
