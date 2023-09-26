package com.codecool.backend.users.repository;

import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.model.AppUserRole;

import java.util.List;
import java.util.Optional;

public interface AppUserDao {

    List<AppUser> getAllAppUsers();
    Optional<AppUser> getAppUserById(Long appUserId);

    void addAppUser(AppUser appUser);

    boolean isAppUserWithEmail(String email);

    boolean isAppUserWithId(Long id);

    void deleteAppUserById(Long Id);

    void updateAppUser(AppUser update);

    Optional<AppUser> findUserByEmail(String email);

    List<AppUser> findUsersByRole(AppUserRole role);

}
