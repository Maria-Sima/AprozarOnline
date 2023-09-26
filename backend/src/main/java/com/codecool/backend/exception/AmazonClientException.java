package com.codecool.backend.exception;

public class AmazonClientException extends RuntimeException{
    public AmazonClientException(String message) {
        super(message);
    }
}
