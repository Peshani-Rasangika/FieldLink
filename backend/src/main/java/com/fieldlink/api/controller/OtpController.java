package com.fieldlink.api.controller;

import com.fieldlink.api.repository.UserRepository;
import com.fieldlink.api.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/otp")
public class OtpController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String purpose = request.get("purpose");

        if ("signup".equalsIgnoreCase(purpose)) {
            if (userRepository.findByEmail(email) != null) {
                return ResponseEntity.badRequest().body("User already exists with this email.");
            }
        } else if ("login".equalsIgnoreCase(purpose) || "forgot_password".equalsIgnoreCase(purpose)) {
            if (userRepository.findByEmail(email) == null) {
                return ResponseEntity.badRequest().body("No user found with this email.");
            }
        } else {
            return ResponseEntity.badRequest().body("Invalid purpose");
        }

        String otp = otpService.GenerateOtp(email, purpose);

        return ResponseEntity.ok("OTP sent successfully for " + purpose);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");

        boolean isValid = otpService.verifyOtp(email, otp);
        if (isValid) {
            return ResponseEntity.ok("OTP verified successfully.");
        } else {
            return ResponseEntity.badRequest().body("Invalid or expired OTP.");
        }
    }
}

