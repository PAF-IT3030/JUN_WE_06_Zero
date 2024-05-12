import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Workout() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
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
        throw new Error("Failed to fetch communities");
      }
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching communities:", error);
      throw error;
    }
  };

  const deleteCommunities = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/workoutPlan/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("psnToken"),
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch communities");
      }
      fetchCommunities();
    } catch (error) {
      console.error("Error fetching communities:", error);
      throw error;
    }
  };

  return (
    <center>
      <div>
        <br />
        <h1>Workout Plan</h1>
        <br />
        <Link to="addworkoutplan" className="text-decoration-none">
          <button type="button" className="btn btn-success">
            Add Workout Plan
          </button>
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
                    <Link
                      to={`updateWorkout/${workout.id}`}
                      className="text-decoration-none"
                    >
                      <button type="button" className="btn btn-success">
                        Update
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteCommunities(workout.id)}
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
