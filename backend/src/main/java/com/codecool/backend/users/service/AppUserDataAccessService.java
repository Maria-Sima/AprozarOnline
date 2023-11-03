package com.codecool.backend.users.service;

import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.repository.AppUserDao;
import com.codecool.backend.users.repository.AppUserRepository;
import com.codecool.backend.users.model.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("jpa")
@AllArgsConstructor
public class AppUserDataAccessService implements AppUserDao {
    private final AppUserRepository appUserRepository;


    public Page<AppUser> getAllAppUsers(Pageable pageable) {
        return appUserRepository.findAll(pageable);
    }


    public Optional<AppUser> getAppUserById(Long appUserId) {
        return appUserRepository.findById(appUserId);
    }


    public void addAppUser(AppUser appUser) {
        appUserRepository.save(appUser);
    }


    public boolean isAppUserWithEmail(String email) {
        return appUserRepository.existsAppUserByEmail(email);
    }


    public boolean isAppUserWithId(Long id) {
        return appUserRepository.existsAppUserById(id);
    }


    public void deleteAppUserById(Long Id) {
        appUserRepository.deleteById(Id);
    }

    public void updateAppUser(AppUser appUser) {
        appUserRepository.save(appUser);
    }


    public Optional<AppUser> findUserByEmail(String email) {
        return appUserRepository.findAppUserByEmail(email);
    }


    public Page<AppUser> findUsersByRole(AppUserRole role,Pageable pageable) {
        return appUserRepository.findAppUsersByAppUserRole(role,pageable);
    }

}
