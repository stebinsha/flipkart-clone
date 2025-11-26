package com.flipkart_clone.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flipkart_clone.project.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image,Integer> {

	List<Image>findBySection_SectionId(Integer sectionId);
}
