// WorkoutStatusUpdate.java

package com.Lifted.Lifted.Fitness.Application.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date; // Import Date class

@Document(collection = "workoutStatusUpdates")
public class WorkoutStatusUpdate {

    @Id
    private String id;

    private String description;
    private double distance;
    private int pushups;
    private int weight;
    private Date date; // New date field

    // Constructors
    public WorkoutStatusUpdate() {
    }

    public WorkoutStatusUpdate(String description, double distance, int pushups, int weight, Date date) {
        this.description = description;
        this.distance = distance;
        this.pushups = pushups;
        this.weight = weight;
        this.date = date; // Set the date in the constructor
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public int getPushups() {
        return pushups;
    }

    public void setPushups(int pushups) {
        this.pushups = pushups;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "WorkoutStatusUpdate{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", distance=" + distance +
                ", pushups=" + pushups +
                ", weight=" + weight +
                ", date=" + date +
                '}';
    }
}
