package com.codecool.backend.users.repository;

public record AppUserDTO(
        Long id,
        String firstName,
        String lastName,
        String email,
        AppUserRole role,
        String imageUrl,
        String address

) {
}
