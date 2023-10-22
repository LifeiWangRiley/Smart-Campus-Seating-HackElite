// Places.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Places.css';
import Place from './Place';

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://10.144.120.182:5000/api/place';

    axios
      .get(apiUrl)
      .then((response) => {
        setPlaces(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching places:', error);
      });
  }, []);

  return (
    // <div>
    //   <h2>Places</h2>
    //   <ul>
    //     {places.map((place) => (
    //       <li key={place.id}>
    //         <strong>Name:</strong> {place.name}<br />
    //         <strong>Description:</strong> {place.description}<br />
    //         <strong>Capacity:</strong> {place.capacity}<br />
    //         <strong>Free Seats Count:</strong> {place.freeSeatsCount}<br />
    //         <strong>Occupied Seats Count:</strong> {place.occupiedSeatsCount}<br />
    //         <strong>Creation Date:</strong> {place.creationDate}<br />
    //         <strong>Last Modified Date:</strong> {place.lastModifiedDate}<br />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // <div className="place-card">
    //   <h3 className="place-title">{name}</h3>
    //   <p className="place-description">{description}</p>
    //   <div className="place-details">
    //     <p>Capacity: {capacity}</p>
    //     <p>Free Seats Count: {freeSeatsCount}</p>
    //     <p>Occupied Seats Count: {occupiedSeatsCount}</p>
    //   </div>
    // </div>
    <div className="places-container">
      {places.map((place) => (
        <Place
          key={place.id}
          name={place.name}
          description={place.description}
          capacity={place.capacity}
          freeSeatsCount={place.freeSeatsCount}
          occupiedSeatsCount={place.occupiedSeatsCount}
        />
      ))}
    </div>
  );
}

export default Places;
