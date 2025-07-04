import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserBookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', {
      state: { ...formData, bookingId: Math.floor(100000 + Math.random() * 900000) }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booking Form - Movie ID {id}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} /><br /><br />
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} /><br /><br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default UserBookingForm;