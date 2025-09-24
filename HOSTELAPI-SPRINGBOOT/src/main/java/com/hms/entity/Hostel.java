package com.hms.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "hostels")
public class Hostel {

    @Id
    // Removed @GeneratedValue so ID is manual
    private Long id;

    @NotBlank(message = "Hostel name is required")
    private String hostelName;

    @NotBlank(message = "Location is required")
    private String location;

    private int capacity;

    @NotBlank(message = "Warden name is required")
    private String wardenName;

    // ✅ Constructors
    public Hostel() {}

    public Hostel(Long id, String hostelName, String location, int capacity, String wardenName) {
        this.id = id;
        this.hostelName = hostelName;
        this.location = location;
        this.capacity = capacity;
        this.wardenName = wardenName;
    }

    // ✅ Getters & Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getHostelName() {
        return hostelName;
    }
    public void setHostelName(String hostelName) {
        this.hostelName = hostelName;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getWardenName() {
        return wardenName;
    }
    public void setWardenName(String wardenName) {
        this.wardenName = wardenName;
    }
}
