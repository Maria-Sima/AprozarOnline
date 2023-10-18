package com.codecool.backend.security.requestModels;

public record RegistrationRequest(
         String firstName,
         String lastName,
         String email,
         String password,
         String role

) {

}