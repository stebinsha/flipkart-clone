package com.flipkart_clone.project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Integer imageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "section_id", nullable = false)
    private Section section;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "price")
    private Double price;

    @Column(name = "offer")
    private String offer;

    @Column(name = "redirect_url")
    private String redirectUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "priority")
    private Integer priority;
 
    public Integer getImageId() { return imageId; }
    public void setImageId(Integer imageId) { this.imageId = imageId; }

    public Section getSection() { return section; }
    public void setSection(Section section) { this.section = section; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getOffer() { return offer; }
    public void setOffer(String offer) { this.offer = offer; }

    public String getRedirectUrl() { return redirectUrl; }
    public void setRedirectUrl(String redirectUrl) { this.redirectUrl = redirectUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getPriority() { return priority; }
    public void setPriority(Integer priority) { this.priority = priority; }
}
