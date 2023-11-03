package com.codecool.backend.users.repository;

import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.model.AppUserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface AppUserDao {

    Page<AppUser> getAllAppUsers(Pageable pageable);

    Optional<AppUser> getAppUserById(Long appUserId);

    void addAppUser(AppUser appUser);

    boolean isAppUserWithEmail(String email);

    boolean isAppUserWithId(Long id);

    void deleteAppUserById(Long Id);

    void updateAppUser(AppUser update);

    Optional<AppUser> findUserByEmail(String email);

    Page<AppUser> findUsersByRole(AppUserRole role, Pageable pageable);

}
