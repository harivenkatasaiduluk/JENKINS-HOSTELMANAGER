package com.hms.controller;

import com.hms.entity.Hostel;
import com.hms.service.HostelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hostels")
@CrossOrigin(origins = "http://localhost:5173") // allow frontend React app
public class HostelController {

    @Autowired
    private HostelService hostelService;

    // Create
    @PostMapping("/")
    public Hostel addHostel(@RequestBody Hostel hostel) {
        return hostelService.addHostel(hostel);
    }

    // Read all
    @GetMapping("/")
    public List<Hostel> getAllHostels() {
        return hostelService.getAllHostels();
        
    }

    // Read by ID
    @GetMapping("/{id}")
    public Hostel getHostelById(@PathVariable int id) {
        return hostelService.getHostelById(id);
        
    }

    // Update
    @PutMapping("/{id}")
    public Hostel updateHostel(@PathVariable int id, @RequestBody Hostel hostel) {
        hostel.setId(id); // ensure correct ID is used
        return hostelService.updateHostel(hostel);
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteHostel(@PathVariable int id) {
        hostelService.deleteHostelById(id);
        return "Hostel with ID " + id + " deleted successfully!";
    }
}
