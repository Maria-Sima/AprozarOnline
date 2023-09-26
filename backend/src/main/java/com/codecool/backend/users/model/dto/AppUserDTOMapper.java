package com.codecool.backend.users.model.dto;

import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.model.dto.AppUserDTO;
import org.springframework.stereotype.Service;

import java.util.function.Function;
@Service
public class AppUserDTOMapper implements Function<AppUser, AppUserDTO> {


    @Override
    public AppUserDTO apply(AppUser appUser) {
        return new AppUserDTO(appUser.getId(),
                appUser.getFirstName(),
                appUser.getLastName(),
                appUser.getEmail(),
                appUser.getAppUserRole().name(),
                appUser.getProfileImage(),
                appUser.getAddress()
                );
    }
}
