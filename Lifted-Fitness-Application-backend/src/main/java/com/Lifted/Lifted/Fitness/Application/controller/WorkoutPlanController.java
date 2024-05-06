package com.Lifted.Lifted.Fitness.Application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Lifted.Lifted.Fitness.Application.entity.WorkoutPlan;
import com.Lifted.Lifted.Fitness.Application.service.WorkoutPlanServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/workoutplan")

public class WorkoutPlanController {

     @Autowired
    private WorkoutPlanServices workoutPlanServices;

    @PostMapping(value = "/")
    private String saveWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan.getId();
    }

    @GetMapping(value = "/getall")
    public Iterable<WorkoutPlan> getWorkoutPlans() {
        return workoutPlanServices.listAll();
    }

    @PutMapping(value = "{id}")
    private WorkoutPlan update(@RequestBody WorkoutPlan workoutPlan, @PathVariable(name = "id") String id) {
        workoutPlan.setId(id);
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan;
    }

    @DeleteMapping("{id}")
    private void deleteWorkoutPlan(@PathVariable("id") String id) {
        workoutPlanServices.deleteWorkoutPlan(id);
    }

    @RequestMapping("{id}")
    private WorkoutPlan getWorkoutPlan(@PathVariable(name = "id") String id) {
        return workoutPlanServices.getWorkoutPlanById(id);
    }
    
}
