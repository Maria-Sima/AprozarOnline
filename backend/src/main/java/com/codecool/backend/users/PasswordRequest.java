package com.codecool.backend.users;

public record PasswordRequest(
        String oldPassword,
        String newPassword
) {
}
