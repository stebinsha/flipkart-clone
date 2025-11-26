package com.flipkart_clone.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flipkart_clone.project.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    User findByEmail(String email);
}