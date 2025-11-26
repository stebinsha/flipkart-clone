package com.flipkart_clone.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flipkart_clone.project.model.Image;
import com.flipkart_clone.project.repository.ImageRepository;
import com.flipkart_clone.project.DTO.ImageDTO;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public List<ImageDTO> getImagesBySectionId(Integer sectionId) {
        List<Image> images = imageRepository.findBySection_SectionId(sectionId);
        return images.stream()
                .map(img -> new ImageDTO(
                        img.getImageId(),
                        img.getImagePath(),
                        img.getDescription(),
                        img.getRedirectUrl(),
                        img.getPrice(),
                        img.getOffer()
                ))
                .collect(Collectors.toList());      
    }
}
