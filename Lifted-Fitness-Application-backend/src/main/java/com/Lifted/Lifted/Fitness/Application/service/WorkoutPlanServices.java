package com.Lifted.Lifted.Fitness.Application.service;

import org.springframework.stereotype.Service;

import com.Lifted.Lifted.Fitness.Application.entity.WorkoutPlan;
import com.Lifted.Lifted.Fitness.Application.repository.WorkoutplanRepo;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WorkoutPlanServices {
    
    private final WorkoutplanRepo repo;

    public void saveOrUpdate(WorkoutPlan workoutPlan) {
        repo.save(workoutPlan);
    }

    public Iterable<WorkoutPlan> listAll() {
        return repo.findAll();
    }

    public void deleteWorkoutPlan(String id) {
        repo.deleteById(id);
    }

    public WorkoutPlan getWorkoutPlanById(String id) {
        return repo.findById(id).orElse(null);
    }
}
