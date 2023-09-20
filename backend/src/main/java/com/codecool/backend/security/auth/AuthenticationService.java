package com.codecool.backend.security.auth;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.exception.EmailNotFoundException;
import com.codecool.backend.notifications.EmailService;
import com.codecool.backend.notifications.MessageSender;
import com.codecool.backend.security.jwt.JWTService;
import com.codecool.backend.users.repository.AppUser;
import com.codecool.backend.users.repository.AppUserDTO;
import com.codecool.backend.users.repository.AppUserDTOMapper;
import com.codecool.backend.users.RegistrationRequest;
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
        messageSender.sendVerificationEmail(email,token);

    }

    public void forgotPassword(String email) throws EmailNotFoundException, EmailFailureException {
      Optional<AppUser> opUser= userService.getUserByEmail(email);
        if (opUser.isPresent()) {
            String  email1 = opUser.get().getEmail();
            String token =jwtService.issueToken(email1);
            messageSender.sendPasswordResetEmail(email, token);
        } else {
            throw new EmailNotFoundException();
        }
    }

    public void resetPassword(PasswordReset body) {
        String email = jwtService.getSubject(body.token);
   userService.resetPassword(email, body.password);
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


