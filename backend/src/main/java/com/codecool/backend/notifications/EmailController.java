package com.codecool.backend.notifications;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
public class EmailController {

    private final EmailService service;

    public EmailController(EmailService emailService) {
        this.service = emailService;
    }

    @PostMapping("/sendFeedBack")
    public ResponseEntity sendFeedBackEmail(@RequestBody FeedBackForm form){
        service.sendFeedBackEmail(form.email(), form.text(), form.name());
        return ResponseEntity.ok().build();
    }
}
