import './BookingPage.css';
import Footer from "./Footer";
import BookingForm from "./BookingForm"
import App from './App';
const BookingPage =(availableTimes, selectedDate, setAvailableTimes) =>{

       return(
        <div className='bookingpage'>
            <div className="BookingHero">
                <div className='HeroText'>
                <h2>Reserve a table,</h2>
                <h1>At Little Lemon !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit sdzq dffc dsqz Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src="./LLRESTO.jpg" alt="Restaurant"></img>
            </div>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
            <Footer/>
        </div>

       )

}

export default BookingPage;