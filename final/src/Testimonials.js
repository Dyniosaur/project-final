import CardTestimonial from "./CardTestimonial.js"
import Button from "./Button.js";

const Testimonials = () => {
    return(
        <div className ="testi">
            <div className ="testimo1">
                <h1></h1>
            </div>

            <div className="testimo2">
                <CardTestimonial/>
                <CardTestimonial/>
                <CardTestimonial/>
            </div>
        </div>
    )
}

export default Testimonials;