package com.codecool.backend.security.clientRequests;

import com.codecool.backend.users.model.dto.AppUserDTO;

public record AuthenticationResponse(
        String token,
        AppUserDTO appUserDTO) {
}