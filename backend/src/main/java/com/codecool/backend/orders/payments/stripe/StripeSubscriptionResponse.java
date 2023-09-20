package com.codecool.backend.orders.payments.stripe;

public record StripeSubscriptionResponse(
      String stripeCustomerId,
         String stripeSubscriptionId,
         String stripePaymentMethodId,
        String username

) {
}
