package com.hms.service;


import com.hms.entity.Hostel;
import com.hms.repository.HostelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HostelServiceImpl implements HostelService {

    private final HostelRepository hostelRepository;

    public HostelServiceImpl(HostelRepository hostelRepository) {
        this.hostelRepository = hostelRepository;
    }

    @Override
    public List<Hostel> getAllHostels() {
        return hostelRepository.findAll();
    }

    @Override
    public Optional<Hostel> getHostelById(Long id) {
        return hostelRepository.findById(id);
    }

    @Override
    public Hostel addHostel(Hostel hostel) {
        return hostelRepository.save(hostel);
    }

    @Override
    public Hostel updateHostel(Hostel hostel) {
        return hostelRepository.save(hostel);
    }

    @Override
    public void deleteHostel(Long id) {
        hostelRepository.deleteById(id);
    }
    
    @Override
    public List<Hostel> searchByName(String hostelName) {
        return hostelRepository.findByHostelNameContainingIgnoreCase(hostelName);
    }
}
