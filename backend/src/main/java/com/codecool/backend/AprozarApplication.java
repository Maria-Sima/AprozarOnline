package com.codecool.backend;


import com.codecool.backend.users.seller.SellerList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AprozarApplication implements CommandLineRunner {

private final SellerList sellerList;
@Autowired
    public AprozarApplication(SellerList sellerList) {
        this.sellerList = sellerList;
    }

    public static void main(String[] args) {
        SpringApplication.run(AprozarApplication.class, args);
    }


    public void run(String... args) {
//
//sellerList.initDB();
    }

}
