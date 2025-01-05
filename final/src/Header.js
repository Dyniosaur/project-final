import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Header = () => {
    const location = useLocation();

    useEffect(() => {
       if (location.hash) {
       const element = document.querySelector(location.hash);
       if (element) {
           element.scrollIntoView({ behavior: "smooth" });
        }
       }
       }, [location]);

    return(
        <section id="header">
                <div className= "header">
                    <div className='item item1'>
                    <img src = "/logoLL.png" alt="Logo"></img>
                </div>
                <Nav/>
                <img className= "hamburger" src="./🦆 icon _hamburger menu.svg" alt="HamburgerMenu"></img>
            </div>
        </section>
    )
}

export default Header;