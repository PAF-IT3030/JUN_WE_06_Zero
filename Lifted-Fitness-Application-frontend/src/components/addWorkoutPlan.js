import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [id, setId] = useState("");
  const [planName, setPlanName] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedWorkOut = {
      id,
      planName,
      duration,
      intensity,
      description,
    };

    try {
     const response = await axios.post(
        `http://localhost:3000/api/v1/workoutPlan/insert`,
        updatedWorkOut, // Moved data here
        {
          headers: {
            Authorization: localStorage.getItem("psnToken"),
          },
        }
      );
      alert("Workout Plan Added Successfully!");
      setId("");
      setPlanName("");
      setDuration("");
      setIntensity("");
      setDescription("");
    } catch (error) {
      setError("Error saving details");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Add Workout Plan</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="id">ID</label>
              <input
                type="number"
                className="form-control"
                id="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="planName">Plan Name</label>
              <input
                type="text"
                className="form-control"
                id="planName"
                value={planName}
                onChange={(event) => setPlanName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                className="form-control"
                id="duration"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input
                type="textarea"
                className="form-control"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Add Workout
            </button>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default AddPost;