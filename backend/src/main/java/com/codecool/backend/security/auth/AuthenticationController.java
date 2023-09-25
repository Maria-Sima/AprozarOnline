package com.codecool.backend.security.auth;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.exception.EmailNotFoundException;
import com.codecool.backend.users.RegistrationRequest;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request) {
        AuthenticationResponse response = authenticationService.login(request);

        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, response.token())
                .body(response);
    }


    @PostMapping("/register")
    public ResponseEntity register(@RequestBody  RegistrationRequest request){

        authenticationService.registerCustomer(request);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/verify")
    public ResponseEntity verifyEmail(@RequestBody String token) {
        if (authenticationService.verifyEmail(token)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/forgot")
    public ResponseEntity forgotPassword(@RequestBody String email) {
        try {

            System.out.println(email);
            authenticationService.forgotPassword(email);
            return ResponseEntity.ok().build();
        } catch (EmailNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } catch (EmailFailureException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/reset")
    public ResponseEntity resetPassword( @RequestBody PasswordReset reset) {
        authenticationService.resetPassword(reset);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        authenticationService.logout(request);
        return ResponseEntity.ok("Logged out successfully");
    }
}
