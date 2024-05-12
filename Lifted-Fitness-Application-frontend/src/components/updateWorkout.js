import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePost() {
  const [ids, setId] = useState("");
  const [planName, setPlanName] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getWorkoutById();
  }, []);

  const handleSubmit = async () => {
    const updatedWorkOut = {
      ids,
      planName,
      duration,
      intensity,
      description,
    };
   
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/workoutPlan/${id}`, // Corrected URL
        updatedWorkOut, // Moved data here
        {
          headers: {
            Authorization: localStorage.getItem("psnToken"),
          },
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to update workoutPlan");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating workoutPlan:", error);
      throw error;
    }
  };
  

  const getWorkoutById = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/workoutPlan/getall",
        {
          headers: {
            Authorization: localStorage.getItem("psnToken"),
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch workout plan");
      }
      const data = response.data;
      const matchingWorkout = data.find((workout) => workout.id === id);
      if (matchingWorkout) {
        setId(matchingWorkout.id);
        setPlanName(matchingWorkout.planName);
        setDuration(matchingWorkout.duration);
        setIntensity(matchingWorkout.intensity);
        setDescription(matchingWorkout.description);
      }
    } catch (error) {
      console.error("Error fetching workout plan by ID:", error);
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Update Workout Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="id">ID</label>
              <input
                disabled
                type="number"
                className="form-control"
                id="id"
                value={ids}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="planName">planName</label>{" "}
              <input
                type="text"
                className="form-control"
                id="planName"
                value={planName}
                onChange={(event) => setPlanName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="intensity">Intensity</label>
              <input
                type="text"
                className="form-control"
                id="intensity"
                value={intensity}
                onChange={(event) => setIntensity(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Update
            </button>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;
