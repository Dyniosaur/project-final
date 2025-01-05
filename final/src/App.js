import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import BookingPage from './BookingPage.js';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchAPI = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableTimes = ['12:00', '14:00', '16:00'];
      resolve(availableTimes);
    }, 1000);
  });
};


function App() {


  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = async (date) => {
    const times = await fetchAPI(date);
    setAvailableTimes(times);
    };


  useEffect(() => {
    initializeTimes('2025-01-01');
    }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/bookingpage" element={<BookingPage availableTimes={availableTimes} initializeTimes={initializeTimes} />} />
      </Routes>
    </>
  );
}


export default App;
