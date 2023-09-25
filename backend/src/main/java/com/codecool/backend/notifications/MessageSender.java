package com.codecool.backend.notifications;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.users.repository.AppUser;

public interface MessageSender {
    void sendPasswordResetEmail(String email, String token) throws EmailFailureException;
    void sendVerificationEmail(String email, String token) throws EmailFailureException;
}