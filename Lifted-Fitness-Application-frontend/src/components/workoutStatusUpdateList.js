import React, { useState } from 'react';

function WorkoutStatusUpdateList({ updates, onUpdate, onDelete }) {
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [editedUpdate, setEditedUpdate] = useState({});

  const tableCellStyle = {
    padding: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: 'normal',
    lineHeight: '1.25rem',
    color: '#4B5563',
  };

  const buttonStyle = {
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
    fontWeight: 'normal',
    lineHeight: '1rem',
    color: '#4B5563',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    width: '80%', // adjust width as needed
    maxWidth: '400px', // adjust maximum width as needed
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1000, // ensure the popup is above other elements
    textAlign: 'left', // align content to left
  };

  const popupInnerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonContainerStyle = {
    textAlign: 'right',
  };

  const buttonPopupStyle = {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4299e1',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const openUpdatePopup = (update) => {
    setSelectedUpdate(update);
    setEditedUpdate(update);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUpdate({ ...editedUpdate, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(editedUpdate);
    setSelectedUpdate(null);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 'semibold', marginBottom: '1rem' }}><center>Recent Updates</center></h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ minWidth: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#F3F4F6' }}>
              <th style={tableCellStyle}>Date</th>
              <th style={tableCellStyle}>Description</th>
              <th style={tableCellStyle}>Distance Ran (miles)</th>
              <th style={tableCellStyle}>Pushups Completed</th>
              <th style={tableCellStyle}>Weight Lifted (lbs)</th>
              <th style={tableCellStyle}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
            {updates.map((update) => (
              <tr key={update.id}>
                <td style={tableCellStyle}>{update.date}</td>
                <td style={tableCellStyle}>{update.description}</td>
                <td style={tableCellStyle}>{update.distance}</td>
                <td style={tableCellStyle}>{update.pushups}</td>
                <td style={tableCellStyle}>{update.weight}</td>
                <td style={tableCellStyle}>
                  <button onClick={() => openUpdatePopup(update)} style={buttonStyle}>Update</button>
                  <button onClick={() => onDelete(update.id)} style={{ ...buttonStyle, marginLeft: '0.5rem', marginRight: '0.5rem' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Your popup/modal for update */}
      {selectedUpdate && (
        <div style={popupStyle}>
          <div style={popupInnerStyle}>
            <h3>Update Details</h3>
            <label style={labelStyle}>Date: </label>
            <input type="text" name="date" value={editedUpdate.date} onChange={handleInputChange} style={inputStyle} />
            <label style={labelStyle}>Description: </label>
            <input type="text" name="description" value={editedUpdate.description} onChange={handleInputChange} style={inputStyle} />
            <label style={labelStyle}>Distance Ran (miles): </label>
            <input type="text" name="distance" value={editedUpdate.distance} onChange={handleInputChange} style={inputStyle} />
            <label style={labelStyle}>Pushups Completed: </label>
            <input type="text" name="pushups" value={editedUpdate.pushups} onChange={handleInputChange} style={inputStyle} />
            <label style={labelStyle}>Weight Lifted (lbs): </label>
            <input type="text" name="weight" value={editedUpdate.weight} onChange={handleInputChange} style={inputStyle} />
            <div style={buttonContainerStyle}>
              <button onClick={handleUpdate} style={buttonPopupStyle}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkoutStatusUpdateList;
