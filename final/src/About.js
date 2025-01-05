import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About =() => {

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
        <section id="about">
            <div className = "about">

            <div className ="about-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse     efficitur augue quis sapien tempor, sit amet vestibulum enim molestie.  Integer rutrum elit a sapien ultrices pretium. Quisque quis neque.</p>
            </div>
            <div className="about-right">
                <img src="/restaurant.png" id="img-about-one" alt="restaurant"></img>
                <img src="/restaurant chef B.png" id="img-about-two" alt="chef"></img>
            </div>
            </div>
        </section>
    )
}

export default About;