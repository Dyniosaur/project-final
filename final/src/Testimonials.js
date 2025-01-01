import CardTestimonial from "./CardTestimonial.js"

const Testimonials = () => {
    return(
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
    )
}

export default Testimonials;