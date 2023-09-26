package com.codecool.backend.security.clientRequests;

public record PasswordRequest(
        String oldPassword,
        String newPassword
) {
}
