package com.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hms.entity.Hostel;

@Repository
public interface HostelRepository extends JpaRepository<Hostel, Integer> 
{
    // Custom finder methods (if needed)
    Hostel findByHostelName(String hostelName);
    Hostel findByWardenName(String wardenName);
}
