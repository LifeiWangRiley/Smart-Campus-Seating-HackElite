// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Classroom from './components/Classroom';
import Library from './components/Library';
import Cafeteria from './components/Cafeteria';
import axios from 'axios';
import Navbar from './components/Navbar';
import Places from './components/Places';

function App() {

  const [places, setPlaces] = useState([]);

  const [bookingResponse, setBookingResponse] = useState(null);

  useEffect(() => {
    // Define the URL for the "Get all Places" API
    const apiUrl = 'http://10.144.120.182:5000/api/place';

    // Make the GET request to fetch places data
    axios.get(apiUrl)
      .then((response) => {
        // Set the fetched places data in the state
        setPlaces(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching places:', error);
      });
  }, []);

  return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/library" element={<Library />} />
            <Route path="/cafeteria" element={<Cafeteria />} />
            <Route path="/places" element={<Places />} />
          </Routes>

        </div>
      </Router>
  );
}

export default App;
