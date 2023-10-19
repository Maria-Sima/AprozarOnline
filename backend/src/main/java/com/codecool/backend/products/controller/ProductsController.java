package com.codecool.backend.products.controller;

import com.codecool.backend.exception.MultipartException;
import com.codecool.backend.products.model.types.ProductForm;
import com.codecool.backend.products.model.dto.ProductDTO;
import com.codecool.backend.products.model.types.ProductCategory;
import com.codecool.backend.products.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("products/")
public class ProductsController {

    private final ProductService service;

    public ProductsController(ProductService service) {

        this.service = service;
    }
    @GetMapping("all")
    public ResponseEntity<List<ProductDTO>> getAllProducts(){
        List<ProductDTO> products=service.getAllProducts();
    return ResponseEntity.ok(products);
    }

    @GetMapping("seller/{sellerId}")
    public ResponseEntity<List<ProductDTO>> getProductsBySellerId(@PathVariable Long sellerId){
        List<ProductDTO> productsBySellerId=service.getAllProductsBySeller(sellerId);
        return ResponseEntity.ok(productsBySellerId);
    }

    @PostMapping("addProduct")
    public ResponseEntity<Void> addProduct(@RequestParam("photo") MultipartFile photos,
                                           @RequestParam("name") String name,
                                           @RequestParam("quantity") double quantity,
                                           @RequestParam("price") double price,
                                           @RequestParam("type") String type,
                                           @RequestParam("productDescription") String productDescription,
                                           @RequestParam("id") Long id) {
        try {
            System.out.println(name + " " + photos + " " + quantity + " " + price + " " + type);
            var productForm = new ProductForm(name, quantity, price, ProductCategory.valueOf(type), productDescription,id);
            service.addProduct(productForm, photos);
            return ResponseEntity.noContent().build();
        } catch (MultipartException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("{productId}")
    public ResponseEntity<Void> deleteProductById(@PathVariable Long productId) {
        service.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("update/{productId}")
    public ResponseEntity<Void> updateProduct(@PathVariable Long productId, @RequestBody ProductForm productForm) {
        service.updateProduct(productId, productForm);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("productImage/{productId}/")
    public ResponseEntity<Void> uploadImage(@PathVariable Long productId, @RequestParam("image") MultipartFile file) {
        service.uploadProductImage(productId, file);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/products/category/{category}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@PathVariable ProductCategory category){
        List<ProductDTO> products=service.getAllProductsByCategory(category);
        return ResponseEntity.ok(products);
    }

}
