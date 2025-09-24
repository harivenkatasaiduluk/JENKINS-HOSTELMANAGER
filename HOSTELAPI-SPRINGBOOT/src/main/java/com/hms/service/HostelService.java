package com.hms.service;



import com.hms.entity.Hostel;

import java.util.List;
import java.util.Optional;

public interface HostelService {
    List<Hostel> getAllHostels();
    Optional<Hostel> getHostelById(Long id);
    Hostel addHostel(Hostel hostel);
    Hostel updateHostel(Hostel hostel);
    void deleteHostel(Long id);
    
    List<Hostel> searchByName(String hostelName);
}
