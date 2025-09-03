package com.fieldlink.api.service;

import com.fieldlink.api.model.User;
import com.fieldlink.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean isPasswordValid(String password) {
    return password != null &&
           password.length() >= 8 &&
           password.matches(".*[A-Z].*") &&
           password.matches(".*[a-z].*") &&
           password.matches(".*\\d.*") &&
           password.matches(".*[^A-Za-z0-9].*");
}
}
