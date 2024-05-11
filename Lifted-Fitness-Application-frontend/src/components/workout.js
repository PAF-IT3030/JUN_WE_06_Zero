import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/workoutplan";

function Workout() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(`${API_URL}/getall`);
      setWorkouts(response.data);
    } catch (error) {
      setError("Error fetching details");
    }
  };

  const handleEditWorkout = (workoutId) => {
    navigate(`/editpost/${workoutId}`);
  };

  const handleDeleteWorkout = async (workoutId) => {
    try {
      await axios.delete(`${API_URL}/delete/${workoutId}`);
      alert("Successfully Deleted");
      fetchWorkouts();
    } catch (error) {
      setError("Error deleting workout details");
    }
  };

  return (
    <center>
      <div>
        <br />
        <h1>Workout Plan</h1>
        <br />
        <Link to="addworkoutplan" className="text-decoration-none">
        <span><button type="button" class="btn btn-success">Add Workout Plan</button></span>
        </Link>
        <div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Duration</th>
                <th scope="col">Intensity</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout._id}>
                  <td>{workout.id}</td>
                  <td>{workout.planName}</td>
                  <td>{workout.duration}</td>
                  <td>{workout.intensity}</td>
                  <td>{workout.description}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => handleEditWorkout(workout._id)}
                    >
                      Edit Plan
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteWorkout(workout._id)}
                    >
                      Delete Plan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
}

export default Workout;
