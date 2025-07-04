import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Movie Details - ID {id}</h2>
      <p>Movie description will go here...</p>
      <button onClick={() => navigate('/book/${id}')}>Book Now</button>
    </div>
  );
}

export default MovieInfo;