const About =() => {
    return(
        <div className = "about">

            <div className ="about-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur augue quis sapien tempor, sit amet vestibulum enim molestie. Integer rutrum elit a sapien ultrices pretium. Quisque quis neque.</p>
            </div>
            <div className="about-right">
                <img src="/restaurant.png" id="img-about-one"></img>
                <img src="/restaurant chef B.png" id="img-about-two"></img>
            </div>
        </div>
    )
}

export default About;