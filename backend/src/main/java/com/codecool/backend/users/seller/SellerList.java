package com.codecool.backend.users.seller;

import com.codecool.backend.users.repository.AppUser;
import com.codecool.backend.users.repository.AppUserDao;
import com.codecool.backend.users.repository.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class SellerList {

    private final SellerService sellerService;
private final AppUserDao dao;

    public void   initDB(){
      var seller1=  AppUser.builder()
                .appUserRole(AppUserRole.SELLER)
                .firstName("Baiatul")
                .lastName("cu palinca")
                .address("Ulita din Vale")
                .email("capa@gmail.com")
                .password("1234")
              .emailVerified(false)
                .profileImage("https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
                .build();
        dao.addAppUser(seller1);
      var seller2=AppUser.builder()
              .appUserRole(AppUserRole.SELLER)
              .firstName("Vasile")
              .lastName("Taranu")
              .address("Valea Ulitei")
              .emailVerified(false)
              .email("vasexx@gmail.com")
              .password("1234")
              .profileImage("https://images.unsplash.com/photo-1537721664796-76f77222a5d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
              .build();
        dao.addAppUser(seller2);
      var seller3=      AppUser.builder()
              .appUserRole(AppUserRole.SELLER)
              .firstName("Vecinu'")
              .lastName("de la 3")
              .address("Etajul 3")
              .emailVerified(false)
              .email("vasexxx@gmail.com")
              .password("1234")
              .profileImage("https://images.unsplash.com/photo-1533808510407-976bfd509dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")
              .build();
      dao.addAppUser(seller3);
      var seller4=  AppUser.builder()
              .appUserRole(AppUserRole.SELLER)
              .firstName("Zana")
              .lastName("Branzei")
              .address("Cascavalesti")
              .emailVerified(false)
              .email("vax@gmail.com")
              .password("1234")
              .profileImage("https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
              .build();
        dao.addAppUser(seller4);




    }
}
