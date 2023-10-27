package com.codecool.backend.products.service;

import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.repository.ProductDAO;
import com.codecool.backend.products.repository.ProductRepository;
import com.codecool.backend.products.model.types.ProductCategory;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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


    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public void addProducts(List<Product> products) {
        productRepository.saveAll(products);
    }

    public Page<Product> getAllProductsBySeller(Long id,Pageable pageable) {
        return productRepository.findProductsByUserId(id,pageable);
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }

    public Optional<Product> findProductById(Long Id) {
        return productRepository.findById(Id);
    }

    public Page<Product> getProductsByCategory(ProductCategory productCategory,Pageable pageable) {
        return productRepository.findProductsByProductCategory(productCategory,pageable);
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
