package com.Lifted.Lifted.Fitness.Application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Lifted.Lifted.Fitness.Application.entity.WorkoutPlan;

@Repository
public interface WorkoutplanRepo extends MongoRepository<WorkoutPlan, String> {
}
