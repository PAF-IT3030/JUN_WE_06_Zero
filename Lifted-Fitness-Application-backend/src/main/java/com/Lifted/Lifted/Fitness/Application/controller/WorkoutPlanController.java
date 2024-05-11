package com.Lifted.Lifted.Fitness.Application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Lifted.Lifted.Fitness.Application.entity.workoutPlan;
import com.Lifted.Lifted.Fitness.Application.service.WorkoutPlanServices;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/workoutPlan")
public class WorkoutPlanController {

    private final WorkoutPlanServices workoutPlanServices;

    @PostMapping("/insert")
    private String saveWorkoutPlan(@RequestBody workoutPlan workoutPlan) {
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan.getId();
    }

    @GetMapping(value = "/getall")
    public Iterable<workoutPlan> getWorkoutPlans() {
        return workoutPlanServices.listAll();
    }

    @PutMapping(value = "{id}")
    private workoutPlan update(@RequestBody workoutPlan workoutPlan, @PathVariable(name = "id") String id) {
        workoutPlan.setId(id);
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan;
    }

    @DeleteMapping("{id}")
    private void deleteWorkoutPlan(@PathVariable("id") String id) {
        workoutPlanServices.deleteWorkoutPlan(id);
    }

    @RequestMapping("{id}")
    private workoutPlan getWorkoutPlan(@PathVariable(name = "id") String id) {
        return workoutPlanServices.getWorkoutPlanById(id);
    }

}
