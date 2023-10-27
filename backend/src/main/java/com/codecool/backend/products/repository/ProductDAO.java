package com.codecool.backend.products.repository;

import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.model.types.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductDAO {

    Page<Product> getAllProducts(Pageable pageable);

    void addProducts(List<Product> products);

    Page<Product> getAllProductsBySeller(Long id, Pageable pageable);

    void addProduct(Product product);

    Optional<Product> findProductById(Long Id);

    Page<Product> getProductsByCategory(ProductCategory productCategory,Pageable pageable);


    void deleteProductById(Long productId);



  boolean existProductById(Long id);

  void updateProduct(Product updates);

}
