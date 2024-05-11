import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom"; 


const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/workoutplan";

function UpdatePost() {
  const [id, setId] = useState("");
  const [planName, setPlanName] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 
  const { workoutId } = useParams();

  useEffect(() => {
    const fetchworkout = async () => {
      try {
        const response = await axios.get(`${API_URL}/search/${workoutId}`);
        setId(response.data.id);
        setPlanName(response.data.planName);
        setDuration(response.data.duration);
        setIntensity(response.data.intensity);
        setDescription(response.data.description);
      } catch (error) {
        setError("Error fetching details");
      }
    };

    fetchworkout();
  }, [workoutId]); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`${API_URL}/edit/${workoutId}`, {
        id,
        planName,
        duration,
        intensity,
        description,

      });
      alert("Successfully Updated!");
      navigate(""); 
    } catch (error) {
      setError("Error updating details");
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
                type="number"
                className="form-control"
                id="id"
                value={id}
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
