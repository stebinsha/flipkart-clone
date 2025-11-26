package com.flipkart_clone.project.service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

     
    public void sendOtp(String to, String otp) throws Exception {
        MimeMessage msg = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true, "UTF-8");

        helper.setTo(to);
        helper.setSubject("Your OTP Code");
   
        String html = """
            <!DOCTYPE html>
            <html>
              <body style="font-family: Arial, Helvetica, sans-serif; color:#333;">
                <div style="max-width:600px; margin:0 auto; padding:20px; border:1px solid #eee;">
                  <div style="text-align:center;">
                    <img src='cid:logo' style='max-width:160px;'/>
                  </div>
                  <h2 style="color:#0f6df9">Your OTP Code</h2>
                  <div style="font-size:28px; font-weight:700; color:#0f6df9; margin:18px 0;">{{OTP}}</div>
                  <p>This code will expire in 5 minutes. Do not share this code with anyone.</p>
                  <p>Thanks,<br/>Flipkart Clone Team</p>
                </div>
              </body>
            </html>
            """;

        
        html = html.replace("{{OTP}}", otp);
        helper.setText(html, true);

        
        File logo = new File("/mnt/data/otp1.jpg");
        if (logo.exists()) {
            FileSystemResource res = new FileSystemResource(logo);
            helper.addInline("logo", res);
        }
        mailSender.send(msg);
    }
}
