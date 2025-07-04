import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectMovie from './component/selectmovie';
import MovieInfo from './component/movieinfo';
import UserBookingForm from './component/userbookingform';
import BookingConfirmation from './component/bookingconfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectMovie />} />
        <Route path="/info/:id" element={<MovieInfo />} />
        <Route path="/book/:id" element={<UserBookingForm />} />
        <Route path="/confirm" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;