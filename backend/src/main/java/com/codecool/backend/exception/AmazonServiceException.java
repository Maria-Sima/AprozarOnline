package com.codecool.backend.exception;

public class AmazonServiceException extends RuntimeException{
    public AmazonServiceException(String message) {
        super(message);
    }
}
