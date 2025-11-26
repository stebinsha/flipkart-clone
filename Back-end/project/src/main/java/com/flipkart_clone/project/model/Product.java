package com.flipkart_clone.project.model;

import jakarta.persistence.*;
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String gender;
    private String masterCategory;
    private String subCategory;
    @Column(name = "articleType")
    private String articleType;
    private String baseColour;
    private String season;
    private int year;
    private String usecase;
    private String productDisplayName;
    private String image_url;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMasterCategory() {
		return masterCategory;
	}
	public void setMasterCategory(String masterCategory) {
		this.masterCategory = masterCategory;
	}
	public String getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}
	public String getArticleType() {
		return articleType;
	}
	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}
	public String getBaseColour() {
		return baseColour;
	}
	public void setBaseColour(String baseColour) {
		this.baseColour = baseColour;
	}
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getUsecase() {
		return usecase;
	}
	public void setUsecase(String usecase) {
		this.usecase = usecase;
	}
	public String getProductDisplayName() {
		return productDisplayName;
	}
	public void setProductDisplayName(String productDisplayName) {
		this.productDisplayName = productDisplayName;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

  
}
