import './BookingPage.css';
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState, useEffect } from 'react';

const BookingPage = ({ availableTimes, initializeTimes, bookedTimesprop, updateBookedTimes }) => {
    const [bookedTimes, setBookedTimes] = useState(bookedTimesprop || []);

    const handleUpdateBookedTimes = (time) => {
        setBookedTimes((prevBookedTimes) => [...prevBookedTimes, time]);
        updateBookedTimes(time);
    };


    const getAvailableTimes = () => {
        if (!bookedTimes) return availableTimes;
        return availableTimes.filter(time => !bookedTimes.includes(time));
    };

    return (
        <div className='bookingpage'>
            <div className="BookingHero">
                <div className='HeroText'>
                    <h2>Reserve a table,</h2>
                    <h1>At Little Lemon!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit sdzq dffc dsqz Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src="./LLRESTO.jpg" alt="Restaurant" />
            </div>
            <BookingForm
                availableTimes={getAvailableTimes()}
                initializeTimes={initializeTimes}
                bookedTimes={bookedTimes}
                updateBookedTimes={handleUpdateBookedTimes}
            />
            <Footer />
        </div>
    );
};

export default BookingPage;