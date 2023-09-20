package com.codecool.backend.users.repository;

public record AppUserDTO(
        Long id,
        String firstName,
        String lastName,
        String email,
        String role,
        String imageUrl,
        String address

) {
}
