package com.example.workoutstatus.controller;

import com.example.workoutstatus.model.WorkoutStatusUpdate;
import com.example.workoutstatus.repository.WorkoutStatusUpdateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        Optional<WorkoutStatusUpdate> existingUpdateOptional = updateRepository.findById(id);
        if (existingUpdateOptional.isPresent()) {
            WorkoutStatusUpdate existingUpdate = existingUpdateOptional.get();
            // Update fields
            existingUpdate.setDescription(update.getDescription());
            existingUpdate.setDistance(update.getDistance());
            existingUpdate.setPushups(update.getPushups());
            existingUpdate.setWeight(update.getWeight());
            // Save the updated update
            return updateRepository.save(existingUpdate);
        } else {
            // Handle update not found
            throw new RuntimeException("Update not found with id: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUpdate(@PathVariable String id) {
        Optional<WorkoutStatusUpdate> updateOptional = updateRepository.findById(id);
        if (updateOptional.isPresent()) {
            updateRepository.deleteById(id);
        } else {
            // Handle update not found
            throw new RuntimeException("Update not found with id: " + id);
        }
    }

    @GetMapping("/latest")
    public WorkoutStatusUpdate getLatestUpdate() {
        // Fetch the latest workout status update from the repository
        List<WorkoutStatusUpdate> allUpdates = updateRepository.findAll();
        if (!allUpdates.isEmpty()) {
            return allUpdates.get(allUpdates.size() - 1); // Assuming the last entry is the latest one
        } else {
            // Handle case where no updates are available
            throw new RuntimeException("No workout status updates found");
        }
    }

    @PutMapping("/current")
    public WorkoutStatusUpdate updateCurrentWorkoutStatus() {
        // Fetch the latest workout status update
        WorkoutStatusUpdate latestUpdate = getLatestUpdate();

        // Update the current workout status with the values from the latest update
        // Assuming you have a mechanism to update the current workout status, you can do it here
        
        // Return the updated current workout status
        return latestUpdate;
    }
}
