package com.flipkart_clone.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flipkart_clone.project.model.User;
import com.flipkart_clone.project.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired private UserRepository repo;

    @GetMapping("/check")
    public Map<String, Boolean> check(@RequestParam String email) {
        boolean exists = repo.existsByEmail(email);
        return Map.of("exists", exists);
    }

    @GetMapping("/get")
    public User get(@RequestParam String email) {
        return repo.findByEmail(email);
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        
        return repo.save(user);
    }
}
