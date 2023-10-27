package com.codecool.backend;


import com.codecool.backend.users.repository.SellerDbSeed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AprozarApplication implements CommandLineRunner {

    private final SellerDbSeed dbSeed;

    public AprozarApplication(SellerDbSeed dbSeed) {
        this.dbSeed = dbSeed;
    }

    public static void main(String[] args) {
        SpringApplication.run(AprozarApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
      //  dbSeed.initDB();
    }
}
