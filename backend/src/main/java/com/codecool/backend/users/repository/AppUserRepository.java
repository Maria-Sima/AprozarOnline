package com.codecool.backend.users.repository;

import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.model.AppUserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser,Long> {
    boolean existsAppUserByEmail(String email);
    boolean existsAppUserById(Long id);
    Optional<AppUser> findAppUserByEmail(String email);
    Page<AppUser> findAppUsersByAppUserRole(AppUserRole role, Pageable pageable);
}
