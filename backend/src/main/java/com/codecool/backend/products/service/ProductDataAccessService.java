package com.codecool.backend.products.service;

import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.repository.ProductDAO;
import com.codecool.backend.products.repository.ProductRepository;
import com.codecool.backend.products.model.types.ProductCategory;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Service
public class ProductDataAccessService implements ProductDAO {

    private ProductRepository productRepository;

    @Autowired
    public ProductDataAccessService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public void addProducts(List<Product> products) {
        productRepository.saveAll(products);
    }

    public List<Product> getAllProductsBySeller(Long id) {
        return productRepository.findProductsByUserId(id);
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }

    public Optional<Product> findProductById(Long Id) {
        return productRepository.findById(Id);
    }

    public List<Product> getProductsByCategory(ProductCategory productCategory) {
        return productRepository.findProductsByProductCategory(productCategory);
    }

    public void deleteProductById(Long productId) {
        productRepository.deleteById(productId);
    }


    @Override
    public boolean existProductById(Long id) {
        return productRepository.existsProductById(id);
    }

    @Override
    public void updateProduct(Product updates) {
        productRepository.save(updates);
    }


}
