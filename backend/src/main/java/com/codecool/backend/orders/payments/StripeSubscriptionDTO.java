package com.codecool.backend.orders.payments;

public record StripeSubscriptionDTO(
         String cardNumber,
         String expMonth,
         String expYear,
         String cvc,
         String email,
         String priceId,
         String username,
         long numberOfLicense,
         boolean success

) {
}
