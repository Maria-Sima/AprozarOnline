package com.codecool.backend.products;

import com.codecool.backend.products.types.ProductType;

import java.util.List;
import java.util.Optional;

public interface ProductDAO {

    List<Product> getAllProducts();

    void addProducts(List<Product> products);

    List<Product> getAllProductsBySeller(Long id);

    void addProduct(Product product);

    Optional<Product> findProductById(Long Id);

    List<Product> getProductsByCategory(ProductType productType);


    void deleteProductById(Long productId);



  boolean existProductById(Long id);

  void updateProduct(Product updates);

}
