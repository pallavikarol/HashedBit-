import React from 'react';
import { useNavigate } from 'react-router-dom';

import avengersImg from '../assets/avengers.jpg';
import batmanImg from '../assets/Batman.jpg';
import supermanImg from '../assets/superman.jpg';
import spidermanImg from '../assets/spiderman.jpg';

const movies = [
  { id: 1, title: 'Avengers', image: avengersImg },
  { id: 2, title: 'Batman', image: batmanImg },
  { id: 3, title: 'Superman', image: supermanImg },
  { id: 4, title: 'Spider-Man', image: spidermanImg },
];

function SelectMovie() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select a Movie</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: 'center' }}>
            <img src={movie.image} alt={movie.title} width="150" />
            <p>{movie.title}</p>
            <button onClick={() => navigate('/info/${movie.id}')}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectMovie;