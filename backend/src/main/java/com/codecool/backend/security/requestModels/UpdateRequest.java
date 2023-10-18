package com.codecool.backend.security.requestModels;

public record UpdateRequest(
        String firstname,

        String lastname,

        String email,

        String password,

        String address

) {
}
