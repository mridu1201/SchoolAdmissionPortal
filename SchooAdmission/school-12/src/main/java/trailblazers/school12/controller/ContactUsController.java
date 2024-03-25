package trailblazers.school12.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import trailblazers.school12.service.EmailService;

@RestController
@RequestMapping("/student")
public class ContactUsController {

    private final EmailService emailService;

    public ContactUsController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/contact-us/{from}/{subject}/{message}")
    public ResponseEntity<String> contactUs(@PathVariable String from, @PathVariable String subject, @PathVariable String message) {
        // Use from as the sender email
        emailService.sendContactUsEmail(from, subject, message);

        // Return a response if needed
        return ResponseEntity.ok("Email sent successfully");
    }

}
