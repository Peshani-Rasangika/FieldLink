package com.fieldlink.api.controller;

import com.fieldlink.api.model.User;
import com.fieldlink.api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (!userService.isPasswordValid(user.getPassword())) {
            return ResponseEntity.badRequest().body("Password does not meet requirements.");
        }
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");

        if (!userService.isPasswordValid(newPassword)) {
            return ResponseEntity.badRequest().body("Password does not meet requirements.");
        }

        User user = userService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found.");
        }

        user.setPassword(newPassword);
        userService.saveUser(user);

        return ResponseEntity.ok("Password reset successful.");
    }
}
