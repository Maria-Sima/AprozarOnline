package com.codecool.backend.orders.payments;

public interface PaymentService {
    String charge(StripeChargeDTO chargeRequest);
}
