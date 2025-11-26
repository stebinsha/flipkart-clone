package com.flipkart_clone.project.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flipkart_clone.project.service.EmailService;
import com.flipkart_clone.project.service.OtpService;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin
public class OtpController {

    @Autowired private OtpService otpService;
    @Autowired private EmailService emailService;

    @PostMapping("/send")
    public Map<String, String> send(@RequestBody Map<String, String> body) throws Exception {
        String email = body.get("email");
        String otp = otpService.generate(email);

        // send email
        emailService.sendOtp(email, otp);

        return Map.of("message", "OTP sent");
    }

    @PostMapping("/verify")
    public Map<String, Boolean> verify(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String otp = body.get("otp");
        boolean valid = otpService.verify(email, otp);
        return Map.of("valid", valid);
    }
}