package com.codecool.backend.notifications;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.users.repository.AppUser;

public interface MessageSender {
    public void sendPasswordResetEmail(String email, String token) throws EmailFailureException;
    public void sendVerificationEmail(String email, String token) throws EmailFailureException;
}