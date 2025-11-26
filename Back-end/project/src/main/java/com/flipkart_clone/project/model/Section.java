package com.flipkart_clone.project.model;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "sections")
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "section_id")
    private Integer sectionId;

    @Column(name = "section_name")
    private String sectionName;

    @Column(name = "section_type")
    private String sectionType;

    @Column(name = "description")
    private String description;

    @Column(name = "priority")
    private Integer priority;

    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Image> images;
 
    public Integer getSectionId() { return sectionId; }
    public void setSectionId(Integer sectionId) { this.sectionId = sectionId; }

    public String getSectionName() { return sectionName; }
    public void setSectionName(String sectionName) { this.sectionName = sectionName; }

    public String getSectionType() { return sectionType; }
    public void setSectionType(String sectionType) { this.sectionType = sectionType; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getPriority() { return priority; }
    public void setPriority(Integer priority) { this.priority = priority; }

    public List<Image> getImages() { return images; }
    public void setImages(List<Image> images) { this.images = images; }
}
