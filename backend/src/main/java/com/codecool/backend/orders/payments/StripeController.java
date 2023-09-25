package com.codecool.backend.orders.payments;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stripe")
@AllArgsConstructor

public class StripeController {

    private final StripeService stripeService;


    @PostMapping("/card/Token")
    @ResponseBody
    public StripeTokenDTO createCardToken(@RequestBody StripeTokenDTO model) {


        return stripeService.createCardToken(model);
    }

    @PostMapping("/charge")
    @ResponseBody
    public String charge(@RequestBody StripeChargeDTO model) {

        return stripeService.charge(model);
    }



}
