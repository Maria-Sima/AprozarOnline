package com.codecool.backend.users.controller;

import com.codecool.backend.security.clientRequests.PasswordRequest;
import com.codecool.backend.security.clientRequests.UpdateRequest;
import com.codecool.backend.users.model.dto.AppUserDTO;
import com.codecool.backend.users.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController{

    private final AppUserService appUserService;
@Autowired
    public UserController(@Qualifier("appUser") AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/{userID}")
    public ResponseEntity<AppUserDTO> getUserById(@PathVariable Long id){
    AppUserDTO user=appUserService.getUser(id);
    return ResponseEntity.ok(user);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id){
    appUserService.deleteCustomerById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{customerId}")
    public ResponseEntity<Void> updateUser(@PathVariable Long customerId,@RequestBody UpdateRequest updateRequest){
        appUserService.updateCustomer(customerId,updateRequest);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/password/{userID}")
    public ResponseEntity<Void> updatePassword(@PathVariable Long userID, @RequestBody PasswordRequest passwordRequest){
    appUserService.updatePassword(passwordRequest,userID);
        return ResponseEntity.noContent().build();
    }

}
