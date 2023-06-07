package com.codecool.backend.controller;

import com.codecool.backend.model.products.Product;
import com.codecool.backend.model.products.Types.ProductType;
import com.codecool.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/home")


public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.findProductById(id);
    }

    @GetMapping("{productType}")
    public List<Product> getProductsByCategory(@PathVariable("type")ProductType productType){
        return productService.getProductsByCategory(productType);
    }


}
