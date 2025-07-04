import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, email, mobile, bookingId } = state || {};

  return (
    <div style={{ padding: '20px' }}>
      <h2>Seat Booked!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <button onClick={() => navigate('/')}>Back to Movies</button>
    </div>
  );
}

export default BookingConfirmation; 