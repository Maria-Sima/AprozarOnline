package com.codecool.backend.users.seller;

import com.codecool.backend.products.Product;
import com.codecool.backend.products.ProductForm;
import com.codecool.backend.products.ProductService;
import com.codecool.backend.products.shoppingcart.ShoppingCartRepository;
import com.codecool.backend.s3.S3Buckets;
import com.codecool.backend.s3.S3Service;
import com.codecool.backend.users.*;
import com.codecool.backend.users.repository.AppUser;
import com.codecool.backend.users.repository.AppUserDTOMapper;
import com.codecool.backend.users.repository.AppUserDao;
import com.codecool.backend.users.repository.AppUserRole;
import com.codecool.backend.users.service.AppUserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service("seller")
public class SellerService extends AppUserService {
    private final ProductService productService;

    public SellerService(@Qualifier("jpa") AppUserDao appUserDao, AppUserDTOMapper userDTOMapper, PasswordEncoder passwordEncoder, S3Service s3Service, S3Buckets s3Buckets, ShoppingCartRepository shoppingCartRepository, ProductService productService) {
        super(appUserDao, userDTOMapper, passwordEncoder, s3Service, s3Buckets, shoppingCartRepository);
        this.productService = productService;
    }

    public List<Product> getProductList(Long sellerId) {
        return productService.getAllProductsBySeller(sellerId);
    }


    public void register(RegistrationRequest request) {
        AppUser newUser = addUser(request);
    }

    public void addProduct(ProductForm productForm, Long userId) {
        var product = Product.builder().productType(productForm.type())
                .name(productForm.name())
                .quantity(productForm.quantity())
                .price(productForm.price())
                .userId(userId).build();
    }


}


