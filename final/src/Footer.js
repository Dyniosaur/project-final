import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Testimonials from "./Testimonials";
const Footer = () => {
    return(
        <div className ="footer">
            <img src="/logoLL.png" alt="LittleLemonLogo"></img>
            <ul>
                <li><Link to ="/#header" aria-label="Home">Home</Link></li>
                <Routes>
                    <Route path="/#header" element={<Header />} />
                </Routes>
                <li><Link to="/#about" aria-label="About us">About us</Link></li>
                <Routes>
                    <Route path="/#about"  element={<About />} />
                </Routes>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <Routes>
                    <Route path="/#testimonials" element={<Testimonials />} />
                </Routes>
                <li><Link to="/bookingpage" aria-label="Reservations">Reservation</Link></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
            </ul>
            <ul>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
            </ul>
            <ul className="last-footer-child">
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
                <li><a href="#">qsdqf</a></li>
            </ul>
        </div>
    )
}

export default Footer;