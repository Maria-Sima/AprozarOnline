package com.codecool.backend.notifications;

import com.codecool.backend.exception.EmailFailureException;

public interface MessageSender {
    void sendPasswordResetEmail(String email, String token) throws EmailFailureException;
    void sendVerificationEmail(String email, String token) throws EmailFailureException;
}