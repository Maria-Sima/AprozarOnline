package com.codecool.backend.security.clientRequests;

import org.springframework.web.multipart.MultipartFile;

public record RegistrationRequest(
         String firstName,
         String lastName,
         String email,
         String password,
         String role

) {

}