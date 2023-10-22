import React from 'react';

function Place({ name, description, capacity, freeSeatsCount, occupiedSeatsCount }) {
  return (
    <div className="place-card">
      <h3 className="place-title">{name}</h3>
      <p className="place-description">{description}</p>
      <div className="place-details">
        <p>Capacity: {capacity}</p>
        <p>Free Seats Count: {freeSeatsCount}</p>
        <p>Occupied Seats Count: {occupiedSeatsCount}</p>
      </div>
    </div>
  );
}

export default Place;
