package com.codecool.backend.exception;

public class EmailFailureException extends RuntimeException{
    public EmailFailureException(String message) {
        super(message);
    }
}
