package com.codecool.backend;


import com.codecool.backend.users.repository.SellerDbSeed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AprozarApplication implements CommandLineRunner {

private final SellerDbSeed sellerList;
@Autowired
    public AprozarApplication(SellerDbSeed sellerList) {
        this.sellerList = sellerList;
    }

    public static void main(String[] args) {
        SpringApplication.run(AprozarApplication.class, args);
    }


    public void run(String... args) {

sellerList.initDB();
    }

}
