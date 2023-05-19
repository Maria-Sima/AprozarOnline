package com.codecool.backend.security.token;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
@Service
@AllArgsConstructor
public class TokenService {
    private final TokenRepository tokenRepository;

    public void saveConfirmationToken(Token token) {
        tokenRepository.save(token);
    }

    public Optional<Token> getToken(String token) {
        return tokenRepository.findByToken(token);
    }


}
