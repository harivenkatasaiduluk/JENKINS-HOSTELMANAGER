package com.hms.controller;

import com.hms.entity.Hostel;
import com.hms.service.HostelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hostelapi")
@CrossOrigin(origins = "*") // allow React frontend
public class HostelController {

    @Autowired
    private HostelService hostelService;

    @GetMapping("/")
    public String home() {
        return "Hostel Management System API is Running 🚀";
    }

    // Create
    @PostMapping("/add")
    public ResponseEntity<Hostel> addHostel(@RequestBody Hostel hostel) {
        Hostel savedHostel = hostelService.addHostel(hostel);
        return new ResponseEntity<>(savedHostel, HttpStatus.CREATED);
    }

    // Read all
    @GetMapping("/all")
    public ResponseEntity<List<Hostel>> getAllHostels() {
        List<Hostel> hostels = hostelService.getAllHostels();
        return new ResponseEntity<>(hostels, HttpStatus.OK);
    }

    // Read by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<?> getHostelById(@PathVariable int id) {
        Hostel hostel = hostelService.getHostelById(id);
        if (hostel != null) {
            return new ResponseEntity<>(hostel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Hostel with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }

    // Update
    @PutMapping("/update")
    public ResponseEntity<?> updateHostel(@RequestBody Hostel hostel) {
        Hostel existing = hostelService.getHostelById(hostel.getId());
        if (existing != null) {
            Hostel updatedHostel = hostelService.updateHostel(hostel);
            return new ResponseEntity<>(updatedHostel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cannot update. Hostel with ID " + hostel.getId() + " not found.", HttpStatus.NOT_FOUND);
        }
    }

    // Delete
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteHostel(@PathVariable int id) {
        Hostel existing = hostelService.getHostelById(id);
        if (existing != null) {
            hostelService.deleteHostelById(id);
            return new ResponseEntity<>("Hostel with ID " + id + " deleted successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cannot delete. Hostel with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }
}
