// WorkoutStatusUpdateController.java

package com.Lifted.Lifted.Fitness.Application.controller;

import com.Lifted.Lifted.Fitness.Application.entity.WorkoutStatusUpdate;
import com.Lifted.Lifted.Fitness.Application.repository.WorkoutStatusUpdateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/updates")
@CrossOrigin(origins = "http://localhost:3000")
public class WorkoutStatusUpdateController {

    @Autowired
    private WorkoutStatusUpdateRepository updateRepository;

    @GetMapping
    public List<WorkoutStatusUpdate> getAllUpdates() {
        return updateRepository.findAll();
    }

    @PostMapping
    public WorkoutStatusUpdate addUpdate(@RequestBody WorkoutStatusUpdate update) {
        return updateRepository.save(update);
    }
    
    @PutMapping("/{id}")
    public WorkoutStatusUpdate updateUpdate(@PathVariable String id, @RequestBody WorkoutStatusUpdate update) {
        return update;
        // Implement update logic here (e.g., find update by id, update fields, save)
    }

    @DeleteMapping("/{id}")
    public void deleteUpdate(@PathVariable String id) {
        // Implement delete logic here (e.g., find update by id, delete)
    }
}

