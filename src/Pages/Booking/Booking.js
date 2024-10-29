import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './booking.css'

const Booking = () => {
  const { id } = useParams(); 
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/api/booking/create`, {
        ...bookingData,
        roomId: id,
        confirmed: false,
      });
      setMessage('Booking successfully created!');
      setBookingData({ name: '', email: '', checkIn: '', checkOut: '' });
    } catch (error) {
      setMessage('Failed to create booking. Please try again.');
    }
    setLoading(false);
  };

  return (

    <>

<div className="booking-page">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-In Date:
          <input
            type="date"
            name="checkIn"
            value={bookingData.checkIn}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            name="checkOut"
            value={bookingData.checkOut}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>

    <footer className="footer">
        <p>&copy; 2024 Room Booking. All rights reserved.</p>
        <p>Follow us on:
          <a href="https://www.facebook.com">Facebook</a> | 
          <a href="https://www.twitter.com">Twitter</a> | 
          <a href="https://www.instagram.com">Instagram</a>
        </p>
      </footer>
    
    
    </>
   



  );
};

export default Booking;
