package com.Lifted.Lifted.Fitness.Application.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.Lifted.Lifted.Fitness.Application.entity.workoutPlan;
import com.Lifted.Lifted.Fitness.Application.repository.WorkoutplanRepo;

public class WorkoutPlanServices {

     @Autowired
    private WorkoutplanRepo repo;

    public void saveOrUpdate(workoutPlan workoutPlan) {
        repo.save(workoutPlan);
    }

    public Iterable<workoutPlan> listAll() {
        return repo.findAll();
    }

    public void deleteWorkoutPlan(String id) {
        repo.deleteById(id);
    }

    public workoutPlan getWorkoutPlanById(String id) {
        return repo.findById(id).orElse(null);
    }

}
