package com.codecool.backend.users.controller;

import com.codecool.backend.security.requestModels.PasswordRequest;
import com.codecool.backend.security.requestModels.UpdateRequest;
import com.codecool.backend.users.model.AppUserRole;
import com.codecool.backend.users.model.dto.AppUserDTO;
import com.codecool.backend.users.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final AppUserService appUserService;

    @Autowired
    public UserController(@Qualifier("appUser") AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/{userID}")
    public ResponseEntity<AppUserDTO> getUserById(@PathVariable Long userID) {
        AppUserDTO user = appUserService.getUser(userID);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/queryByRole/{role}")
    public ResponseEntity<Page<AppUserDTO>> getUsersByRole(@PathVariable AppUserRole role, Pageable pageable) {
        Page<AppUserDTO> usersByRole = appUserService.getUsersByRole(role, pageable);
        return ResponseEntity.ok(usersByRole);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        appUserService.deleteCustomerById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Void> updateUser(@PathVariable Long customerId, @RequestBody UpdateRequest updateRequest) {
        appUserService.updateCustomer(customerId, updateRequest);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/password/{userID}")
    public ResponseEntity<Void> updatePassword(@PathVariable Long userID, @RequestBody PasswordRequest passwordRequest) {
        appUserService.updatePassword(passwordRequest, userID);
        return ResponseEntity.noContent().build();
    }

}
