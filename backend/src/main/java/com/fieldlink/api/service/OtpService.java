package com.fieldlink.api.service;

import com.fieldlink.api.model.Otp;
import com.fieldlink.api.repository.OtpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class OtpService {

    private final OtpRepository otpRepository;
    @Autowired
    private EmailService emailService;

    public OtpService(OtpRepository otpRepository) {
        this.otpRepository = otpRepository;
    }

    public String GenerateOtp(String email, String purpose) {
        String otp = String.format("%06d", new Random().nextInt(999999));
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(5);

        Optional<Otp> existingOtp = otpRepository.findByEmail(email);
        Otp otpEntity = existingOtp.orElse(new Otp());

        otpEntity.setEmail(email);
        otpEntity.setOtpcode(otp);
        otpEntity.setExpiryTime(expiry);

        otpRepository.save(otpEntity);

        emailService.sendOtpEmail(email, otp, purpose);
        return otp;
    }

    public boolean verifyOtp(String email, String otp) {
        Optional<Otp> otpEntityOpt = otpRepository.findByEmail(email);

        if (otpEntityOpt.isPresent()) {
            Otp storedOtp = otpEntityOpt.get();
            return storedOtp.getOtpcode().equals(otp) &&
                    storedOtp.getExpiryTime().isAfter(LocalDateTime.now());
        }

        return false;
    }
}
