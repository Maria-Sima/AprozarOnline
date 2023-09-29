package com.codecool.backend.users.seller;

import com.codecool.backend.products.model.dto.ProductDTO;
import com.codecool.backend.products.model.ProductForm;
import com.codecool.backend.products.model.types.ProductType;
import com.codecool.backend.users.model.dto.AppUserDTO;
import com.codecool.backend.users.service.AppUserService;
import com.codecool.backend.users.controller.UserController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("seller")
public class SellerController extends UserController {

    private final SellerService service;

    public SellerController(SellerService appUserService, SellerService service) {
        super(appUserService);
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<AppUserDTO>> getAllSellers() {
        List<AppUserDTO> sellers = service.getSellers();
        System.out.println(sellers);
        return ResponseEntity.ok(sellers);
    }

    @GetMapping("/{sellerId}/products")
    public ResponseEntity<List<ProductDTO>> getMyProducts(@PathVariable Long sellerId) {
        List<ProductDTO> myProducts = service.getProductList(sellerId);
        System.out.println(myProducts);
        return ResponseEntity.ok(myProducts);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<Void> addProduct(@RequestParam("photo") MultipartFile photos,
                                           @RequestParam("name") String name,
                                           @RequestParam("quantity") double quantity,
                                           @RequestParam("price") double price,
                                           @RequestParam("type") String type,
                                           @RequestParam("productDescription") String productDescription,
                                           @RequestParam("id") Long id) {
        System.out.println(name +"+ "+type+"+ "+price+"+ "+id);
        var productForm = new ProductForm(name, quantity, price, ProductType.valueOf(type), productDescription);
        service.addProduct(productForm, id, photos);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("products/{productId}")
    public ResponseEntity<Void> deleteProduct(Long productId) {
        service.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long productId) {
        ProductDTO productDTO = service.getProductById(productId);
        return ResponseEntity.ok(productDTO);
    }
@GetMapping("/info/{id}")
public ResponseEntity<AppUserDTO> getSellerById(@PathVariable Long id){

        AppUserDTO userDTO=service.getUser(id);
    System.out.println(userDTO);
        return ResponseEntity.ok(userDTO);
}

    @PutMapping("/{productId}/update")
    public ResponseEntity<Void> updateProduct(@PathVariable Long productId, @RequestBody ProductForm productForm) {
        service.updateProduct(productId, productForm);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{productId}/productImage")
    public ResponseEntity<Void> uploadImage(@PathVariable Long productId, @RequestParam("image") MultipartFile file) {
        service.uploadProductImage(productId, file);
        return ResponseEntity.noContent().build();
    }

@GetMapping("/products/category/{category}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@PathVariable ProductType category){
        List<ProductDTO> products=service.getProductsByCategory(category);
        return ResponseEntity.ok(products);
}
}
