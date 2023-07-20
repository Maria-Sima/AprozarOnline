package com.codecool.backend.users;

import org.springframework.web.multipart.MultipartFile;

public record RegistrationRequest(
         String firstName,
         String lastName,
         String email,
         String password,
         String role
) {

}