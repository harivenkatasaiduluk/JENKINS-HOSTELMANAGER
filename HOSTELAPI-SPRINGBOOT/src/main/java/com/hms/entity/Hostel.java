package com.hms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hostel_table")
public class Hostel {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hostel_id")
    private int id;
    
    @Column(name = "hostel_name", nullable = false, length = 50)
    private String hostelName;
    
    @Column(name = "hostel_location", nullable = false, length = 100)
    private String location;
    
    @Column(name = "hostel_capacity", nullable = false)
    private int capacity;
    
    @Column(name = "warden_name", nullable = false, length = 50)
    private String wardenName;

    // Getters & Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
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

    // toString()
    @Override
    public String toString() {
        return "Hostel [id=" + id + ", hostelName=" + hostelName + ", location=" + location 
                + ", capacity=" + capacity + ", wardenName=" + wardenName + "]";
    }
}
