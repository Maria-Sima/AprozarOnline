package com.codecool.backend.security.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.antlr.v4.runtime.misc.NotNull;


public class PasswordReset {

    @NotNull
    public String token;

    @NotBlank
    @Size(min = 6)
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password must contain 1 number,1 lowercase letter,1 uppercase letter, 1 special character")
    @NotNull
    public String password;


}
