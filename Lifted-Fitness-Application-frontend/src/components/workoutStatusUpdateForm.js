import React, { useState } from 'react';
import axios from 'axios';

function WorkoutStatusUpdateForm({ addUpdate }) {
  const [formData, setFormData] = useState({
    description: '',
    distance: '',
    pushups: '',
    weight: '',
    date: '', // Adding date field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addUpdate(formData);
    setFormData({
      description: '',
      distance: '',
      pushups: '',
      weight: '',
      date: '', // Resetting date field after submission
    });
    // No need to call postDataToBackend here, it's called from the App component after updating
  };

  const [responseData, setResponseData] = useState(null);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}><center>Today Workout Status Updates</center></h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <label htmlFor="description" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151' }}>Description:</label>
        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />

        <label htmlFor="distance" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151' }}>Distance Ran (miles):</label>
        <input type="number" id="distance" name="distance" value={formData.distance} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />

        <label htmlFor="pushups" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151' }}>Pushups Completed:</label>
        <input type="number" id="pushups" name="pushups" value={formData.pushups} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />

        <label htmlFor="weight" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151' }}>Weight Lifted (lbs):</label>
        <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />

        <label htmlFor="date" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#374151' }}>Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />

        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#6366F1', color: '#ffffff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>Update Status</button>
        <p style={{ fontSize: '0.875rem', color: '#4B5563', marginTop: '0.5rem' }}>Response from Backend: {responseData ? JSON.stringify(responseData) : null}</p>
      </form>
    </div>
  );
}

export default WorkoutStatusUpdateForm;
