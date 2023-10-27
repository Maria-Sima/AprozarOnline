package com.codecool.backend.products.controller;

import com.codecool.backend.exception.MultipartException;
import com.codecool.backend.products.model.types.ProductForm;
import com.codecool.backend.products.model.dto.ProductDTO;
import com.codecool.backend.products.model.types.ProductCategory;
import com.codecool.backend.products.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    public ResponseEntity<Page<ProductDTO>> getAllProducts(@PageableDefault(size = 10, sort = "name") Pageable pageable){
        Page<ProductDTO> products=service.getAllProducts(pageable);
    return ResponseEntity.ok(products);
    }

    @GetMapping("seller/{sellerId}")
    public ResponseEntity<Page<ProductDTO>> getProductsBySellerId(@PathVariable Long sellerId, @PageableDefault(size = 10, sort = "name") Pageable pageable){
        Page<ProductDTO> productsBySellerId=service.getAllProductsBySeller(sellerId,pageable);
        return ResponseEntity.ok(productsBySellerId);
    }

    @PostMapping("addProduct")
    public ResponseEntity<Void> addProduct(@RequestParam("photo") MultipartFile photo,
                                           @RequestParam("name") String name,
                                           @RequestParam("quantity") double quantity,
                                           @RequestParam("price") double price,
                                           @RequestParam("type") String type,
                                           @RequestParam("productDescription") String productDescription,
                                           @RequestParam("id") Long id) {
        try {
            System.out.println(name + " " + photo + " " + quantity + " " + price + " " + type+" "+productDescription);
            var productForm = new ProductForm(name, quantity, price, ProductCategory.valueOf(type), productDescription,id);
            service.addProduct(productForm, photo);
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
    public ResponseEntity<Page<ProductDTO>> getProductsByCategory(@PathVariable ProductCategory category,@PageableDefault(size = 10, sort = "name") Pageable pageable){
        Page<ProductDTO> products=service.getAllProductsByCategory(category,pageable);
        return ResponseEntity.ok(products);
    }

}
