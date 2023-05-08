package com.codecool.aprozar.service;

import com.codecool.aprozar.model.Product;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Getter
@Setter
@Service
public class ProductService {

    private ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public void addProducts(List<Product> products){
        productRepository.saveAll(products);
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }


}
