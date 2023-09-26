package com.codecool.backend.users.model;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(
        name = "appUser"
)
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id", nullable = false)
    private Long id;


    @Column(nullable = false)
    private String firstName;


    @Column(nullable = false)
    private String lastName;


    @Column(name = "email", nullable = false, unique = true, length = 320)
    private String email;



    @Column(name = "password", nullable = false, length = 1000)
    private String password;


    @Column(nullable = true)
    private String address;

    @Enumerated(EnumType.STRING)
    private AppUserRole appUserRole;

    @Column(
            nullable = true
    )
    private String profileImage;

    @Column(name = "email_verified")
    private Boolean emailVerified;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(
                appUserRole.name()
        );
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    public Boolean isEmailVerified() {
        return emailVerified;
    }


    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    @Override
    public String getUsername() {
        return email;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}