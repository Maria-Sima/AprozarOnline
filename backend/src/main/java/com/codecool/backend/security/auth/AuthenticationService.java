package com.codecool.backend.security.auth;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.exception.EmailNotFoundException;
import com.codecool.backend.notifications.MessageSender;
import com.codecool.backend.security.clientRequests.AuthenticationResponse;
import com.codecool.backend.security.clientRequests.LoginRequest;
import com.codecool.backend.security.clientRequests.PasswordReset;
import com.codecool.backend.security.jwt.JWTService;
import com.codecool.backend.security.clientRequests.RegistrationRequest;
import com.codecool.backend.users.model.AppUser;
import com.codecool.backend.users.model.dto.AppUserDTO;
import com.codecool.backend.users.model.dto.AppUserDTOMapper;
import com.codecool.backend.users.service.AppUserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    private final AppUserDTOMapper appUserDTOMapper;
    private final AppUserService userService;
    private final MessageSender messageSender;


    public AuthenticationService(AuthenticationManager authenticationManager, JWTService jwtService, AppUserDTOMapper appUserDTOMapper, @Qualifier("appUser") AppUserService userService, MessageSender messageSender) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.appUserDTOMapper = appUserDTOMapper;
        this.userService = userService;
        this.messageSender = messageSender;
    }

    public AuthenticationResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );
        AppUser principal = (AppUser) authentication.getPrincipal();
        AppUserDTO userDTO = appUserDTOMapper.apply(principal);
        String token = jwtService.issueToken(userDTO.email());
        System.out.println(token);
        return new AuthenticationResponse(token, userDTO);
    }

    public void registerCustomer(RegistrationRequest request) {
        AppUser newUser = userService.addUser(request);

        AppUserDTO newUserDTO = appUserDTOMapper.apply(newUser);

        String email = newUser.getEmail();
        String token = jwtService.issueToken(email);
        messageSender.sendVerificationEmail(email, token);

    }

    public void forgotPassword(String email) throws EmailNotFoundException, EmailFailureException {
        System.out.println(email);
        Optional<AppUser> opUser = userService.getUserByEmail(email);
        System.out.println(opUser);
        if (opUser.isPresent()) {
            String emailUser = opUser.get().getEmail();
            System.out.println(emailUser);
            String token = jwtService.issueToken(emailUser);
            System.out.println(token);
            messageSender.sendPasswordResetEmail(emailUser, token);
        } else {
            throw new EmailNotFoundException();
        }
    }

    public void resetPassword(PasswordReset body) {
        String email = jwtService.getSubject(body.token);
        userService.resetPassword(email, body.password);
    }

    public boolean verifyEmail(String token) {
        System.out.println(token);
        String email = jwtService.getSubject(token);
        System.out.println(email);
        return userService.verifyUser(email);
    }

    public void logout(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        String jwt = authHeader.substring(7);
        String subject = jwtService.getSubject(jwt);

        if (subject != null) {
            SecurityContextHolder.getContext().setAuthentication(null);
        }
    }
}


