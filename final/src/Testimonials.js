import CardTestimonial from "./CardTestimonial.js"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Testimonials = () => {

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

    <section id="testimonials">
            <div className="testi">
            <div className="testimonials-title">
                <h1>Testimonials</h1>
            </div>

            <div className="testimonials">
                <CardTestimonial image="./Homme 1.jpg" name="Nikolas" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." rating="Excellent 5/5" />
                <CardTestimonial image="./Homme 2.jpg" name="Jean" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." rating="Very good 4.5/5"/>
                <CardTestimonial image="./ProfilePic.jpg" name="Damian" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." rating="Excellent 5/5"/>
            </div>
        </div>

    </section>
        
    )
}

export default Testimonials;