package com.hms.service;

import java.util.List;
import com.hms.entity.Hostel;

public interface HostelService {
    Hostel addHostel(Hostel hostel);
    List<Hostel> getAllHostels();
    Hostel getHostelById(int id);
    Hostel updateHostel(Hostel hostel);
    void deleteHostelById(int id);
}
