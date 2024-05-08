import React from 'react';

function WorkoutStatusUpdateList({ updates, onUpdate, onDelete }) {
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

  const buttonHoverStyle = {
    color: '#E53E3E',
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
                  <button onClick={() => onUpdate(update)} style={buttonStyle}>Update</button>
                  <button onClick={() => onDelete(update.id)} style={{ ...buttonStyle, marginLeft: '0.5rem', marginRight: '0.5rem' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkoutStatusUpdateList;
