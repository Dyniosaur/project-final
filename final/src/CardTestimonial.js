const CardTestimonial = ({name, image, comment, rating}) => {
    return (
        <div className = "cardtestimonial">
            <div className="cd-name">
                <h2>{name}</h2>
                <img src={image}></img>

            </div>
            <p>{comment}</p>
            <div className="ratings">
                <h3>{rating}</h3>
                <img src="./star.png"></img>
            </div>

        </div>

    )
}

export default CardTestimonial;