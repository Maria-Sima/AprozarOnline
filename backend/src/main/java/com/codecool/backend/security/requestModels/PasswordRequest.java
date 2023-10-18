package com.codecool.backend.security.requestModels;

public record PasswordRequest(
        String oldPassword,
        String newPassword
) {
}
