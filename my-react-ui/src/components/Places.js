// Places.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Places.css';
import Place from './Place';

function Places() {
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [updatedPlaces, setUpdatedPlaces] = useState([]);


  useEffect(() => {
    const apiUrl = 'http://10.144.120.182:5000/api/place';

    axios
      .get(apiUrl)
      .then((response) => {
        setPlaces(response.data.data);
        setUpdatedPlaces(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching places:', error);
      });
  }, []);

  // const bookSlot = (studentId, placeId) => {
  //   const apiUrl = 'http://10.144.120.182:5000/api/place/book-slot';
  
  //   const requestData = {
  //     studentId: studentId,
  //     placeId: placeId,
  //   };
  
  //   axios
  //     .post(apiUrl, requestData)
  //     .then((response) => {
  //       setBookingResponse(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error booking slot:', error);
  //     });
  // };

  const bookSlot = (studentId, placeId) => {
    const apiUrl = 'http://10.144.120.182:5000/api/place/book-slot';
  
    const requestData = {
      studentId: studentId,
      placeId: placeId,
    };
  
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        const bookedPlaceId = response.data.data.place;
  
        // Update the state with the new place data after booking
        setUpdatedPlaces((prevPlaces) =>
          prevPlaces.map((place) => {
            if (place.id === bookedPlaceId) {
              // Update the seat counts
              const updatedPlace = {
                ...place,
                freeSeatsCount: place.freeSeatsCount - 1,
                occupiedSeatsCount: place.occupiedSeatsCount + 1,
              };
              return updatedPlace;
            }
            return place;
          })
        );
  
        setBookingResponse(response.data);
      })
      .catch((error) => {
        console.error('Error booking slot:', error);
      });
  };
  

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
    // <div className="places-container">
    //   {places.map((place) => (
    //     <Place
    //       key={place.id}
    //       name={place.name}
    //       description={place.description}
    //       capacity={place.capacity}
    //       freeSeatsCount={place.freeSeatsCount}
    //       occupiedSeatsCount={place.occupiedSeatsCount}
    //     />
    //   ))}
    // </div>
    <div className="places-container">
    <div className="category-buttons">
      <button onClick={() => setSelectedCategory('Library')}>Library</button>
      <button onClick={() => setSelectedCategory('Cafeteria')}>Cafeteria</button>
      <button onClick={() => setSelectedCategory('Classroom')}>Classroom</button>
    </div>
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
    {updatedPlaces.map((place) => (
  <Place
    key={place.id}
    name={place.name}
    description={place.description}
    capacity={place.capacity}
    freeSeatsCount={place.freeSeatsCount}
    occupiedSeatsCount={place.occupiedSeatsCount}
  />
))}
    {selectedCategory && (
      <div className="booking-message">
        <p>Selected category: {selectedCategory}</p>
        <button
          onClick={() => {
            const studentId = '123456'; // Replace with the actual student ID
            const placeId = 'samplePlaceID'; // Replace with the actual place ID
            bookSlot(studentId, placeId);
          }}
        >
          Book a Slot
        </button>
        {bookingResponse && (
          <p>
            Booking successful! Slot ID: {bookingResponse.data.id}
          </p>
        )}
      </div>
    )}
  </div>
  );
}

export default Places;
