package com.codecool.backend.notifications;
import com.codecool.backend.exception.EmailFailureException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailService implements MessageSender {

    @Value("${email.from}")
    private String fromAddress;

    @Value("${app.backend.url}")
    private String serverUrl;
    @Value("${app.frontend.url}")
    private String clientUrl;
    private JavaMailSender javaMailSender;

@Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    private SimpleMailMessage createMailMessage() {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(fromAddress);
        return simpleMailMessage;
    }


    public void sendVerificationEmail(String email, String token) throws EmailFailureException {
        SimpleMailMessage message = createMailMessage();
        message.setTo(email);
        message.setSubject("Verify your email to active your account.");
        message.setText("Please follow the link below to verify your email to active your account.\n" +
                serverUrl + "auth/verify?token=" + token);
        try {
            System.out.println(message);
            javaMailSender.send(message);
        } catch (MailException ex) {
            throw new EmailFailureException("The email couldn't be send! Check the email address and try again ");
        }
    }


    public void sendFeedBackEmail(String email, String text,String name) throws EmailFailureException {
        SimpleMailMessage messageToCustomer = createMailMessage();
        messageToCustomer.setTo(email);
        messageToCustomer.setSubject("Salut "+name);
        messageToCustomer.setText("Vă mulțumim pentru feedback. Un reprezentant va lua legătura cu dvs. pentru mai multe detalii.");
        SimpleMailMessage messageFromCustomer = createMailMessage();
        messageFromCustomer.setTo(email);
        messageFromCustomer.setSubject("Feedback received from "+ name);
        messageFromCustomer.setText("Subject:"+text+ "\nContact Info: "+email);
        try {
            javaMailSender.send(messageToCustomer);
        } catch (MailException ex) {
            throw new EmailFailureException("The email couldn't be send! Check the email address and try again ");
        }
    }
    public void sendPasswordResetEmail(String email, String token) throws EmailFailureException {
        SimpleMailMessage message = createMailMessage();
        message.setTo(email);
        message.setSubject("Your password reset request link.");
        message.setText("You requested a password reset on our website. Please " +
                "find the link below to be able to reset your password.\n" + clientUrl +
                "reset?token=" + token);
        try {
            javaMailSender.send(message);
        } catch (MailException ex) {
            throw new EmailFailureException("The email couldn't be send! Check the email address and try again ");
        }
    }
}