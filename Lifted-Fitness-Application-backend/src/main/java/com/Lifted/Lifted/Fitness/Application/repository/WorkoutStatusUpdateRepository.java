// WorkoutStatusUpdateRepository.java

package com.Lifted.Lifted.Fitness.Application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Lifted.Lifted.Fitness.Application.entity.WorkoutStatusUpdate;

@Repository
public interface WorkoutStatusUpdateRepository extends MongoRepository<WorkoutStatusUpdate, String> {
}
