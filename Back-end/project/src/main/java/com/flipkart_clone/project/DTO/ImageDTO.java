package com.flipkart_clone.project.DTO;

public class ImageDTO {
 private Integer imageId;
 private String imagePath;
 private String description;
 private String redirectUrl;
 private Double price;
	private String offer;

 public ImageDTO(Integer imageId, String imagePath, String description, String redirectUrl,Double price,
	 String offer) {
     this.imageId = imageId;
     this.imagePath = imagePath;
     this.description = description;
     this.redirectUrl = redirectUrl;
     this.price=price;
     this.offer=offer;
 }

 public Double getPrice() {
	return price;
}

 public void setPrice(Double price) {
	this.price = price;
 }

 public String getOffer() {
	return offer;
 }

 public void setOffer(String offer) {
	this.offer = offer;
 }

 public Integer getImageId() { return imageId; }
 public String getImagePath() { return imagePath; }
 public String getDescription() { return description; }
 public String getRedirectUrl() { return redirectUrl; }
}

