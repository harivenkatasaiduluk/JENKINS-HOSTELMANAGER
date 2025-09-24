package com.hms.controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Hostel;
import com.hms.service.HostelService;

@RestController
@RequestMapping("/hostelapi")
@CrossOrigin(origins = "*")
public class HostelController {

    private final HostelService hostelService;

    public HostelController(HostelService hostelService) {
        this.hostelService = hostelService;
    }
    @GetMapping
    public String home() 
    {
        return "Welcome to HOSTEL MANAGEMENT SYSTEM";
    }

    // Read all
    @GetMapping("/all")
    public List<Hostel> getAllHostels() {
        return hostelService.getAllHostels();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hostel> getHostelById(@PathVariable Long id) {
        return hostelService.getHostelById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public Hostel addHostel(@RequestBody Hostel hostel) {
        return hostelService.addHostel(hostel);
    }

    @PutMapping("/update")
    public Hostel updateHostel(@RequestBody Hostel hostel) {
        return hostelService.updateHostel(hostel);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteHostel(@PathVariable Long id) {
        hostelService.deleteHostel(id);
    }

    @GetMapping("/search")
    public List<Hostel> searchHostels(@RequestParam String name) {
        return hostelService.searchByName(name);
    }
}
