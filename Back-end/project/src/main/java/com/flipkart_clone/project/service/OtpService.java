package com.flipkart_clone.project.service;

import java.time.Instant;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

@Service
public class OtpService {
    private record OtpEntry(String code, Instant expiresAt) {}
    private final Map<String, OtpEntry> store = new ConcurrentHashMap<>();

    public String generate(String email) {
        String otp = String.format("%06d", new Random().nextInt(900000) + 100000);
        Instant expiry = Instant.now().plusSeconds(300);
        store.put(email, new OtpEntry(otp, expiry));
        return otp;
    }

    public boolean verify(String email, String otp) {
        if (!store.containsKey(email)) return false;
        OtpEntry e = store.get(email);
        if (e.expiresAt.isBefore(Instant.now())) { store.remove(email); return false; }
        boolean ok = e.code.equals(otp);
        if (ok) store.remove(email);
        return ok;
    }
}