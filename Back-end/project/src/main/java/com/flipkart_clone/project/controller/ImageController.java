package com.flipkart_clone.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flipkart_clone.project.DTO.ImageDTO;
import com.flipkart_clone.project.service.ImageService;

@RestController
@RequestMapping("/api/sections")
@CrossOrigin(origins = "http://localhost:5173")
public class ImageController {

    @Autowired
    private ImageService imageService;
    @GetMapping("/{sectionId}/images")
    public List<ImageDTO> getImagesBySection(@PathVariable Integer sectionId) {
        return imageService.getImagesBySectionId(sectionId);
    }
}
