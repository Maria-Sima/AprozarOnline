package com.codecool.backend;


import com.codecool.backend.fileStorage.ImageService;
import com.codecool.backend.products.Product;
import com.codecool.backend.products.ProductService;
import com.codecool.backend.products.Types.ProductType;
import com.codecool.backend.security.auth.AuthenticationService;
import com.codecool.backend.security.auth.LoginRequest;
import com.codecool.backend.users.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class AprozarApplication implements CommandLineRunner {

    @Autowired
    private AuthenticationService authenthicationService;
    @Autowired
    private ProductService productService;
    @Autowired
    private ImageService imageService;


    public static void main(String[] args) {
        SpringApplication.run(AprozarApplication.class, args);
    }


    public void run(String... args) {
        List<Product> productList = new ArrayList<>();


        Product bread = Product.builder()
                .name("Bread")
                .productType(ProductType.Meat)
                .price(5.00)
                .build();
        productList.add(bread);


        Product eggs = Product.builder()
                .name("Eggs")
                .productType(ProductType.Dairy)
                .price(2.50)
                .quantity(20)
                .build();
        productList.add(eggs);

        Product apple = Product.builder()
                .name("Apple")
                .productType(ProductType.Fruits)
                .price(1.00)
                .quantity(30)
                .build();
        productList.add(apple);

        Product orange = Product.builder()
                .name("Orange")
                .productType(ProductType.Fruits)
                .price(1.20)
                .quantity(25)
                .build();
        productList.add(orange);
        productService.addProduct(orange);

        Product chicken = Product.builder()
                .name("Chicken")
                .productType(ProductType.Meat)
                .price(8.50)
                .build();
        productList.add(chicken);
        productService.addProduct(chicken);


        Product cheese = Product.builder()
                .name("Cheese")
                .productType(ProductType.Dairy)
                .price(4.50)
                .quantity(15)
                .build();
        productList.add(cheese);
        productService.addProduct(cheese);




        RegistrationRequest newUserRequest = new RegistrationRequest("admin", "admin", "mail@yahoo.com", "123","SELLER");

       var user= authenthicationService.registerCustomer(newUserRequest);
        Product milk = Product.builder().userId(user.appUserDTO().id())
                .name("Milk")
                .productType(ProductType.Dairy)
                .price(3.50)
                .quantity(10)
                .build();
        productList.add(milk);
        productService.addProduct(milk);





//        s3Service.putObject("aprozar", "key", apple.getName().getBytes());
//
//        byte[] obj = s3Service.getObject("aprozar", "key");
//        System.out.println("Heep-heep horay" + new String(obj));
    }

}
