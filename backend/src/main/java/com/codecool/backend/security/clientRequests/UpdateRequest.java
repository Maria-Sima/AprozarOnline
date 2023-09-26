package com.codecool.backend.security.clientRequests;

public record UpdateRequest(
        String firstname,

        String lastname,

        String email,

        String password,

        String address

) {
}
