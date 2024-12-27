import './App.css';

const Card = ({image}) => {
    return(
        <>
            <img src={image}></img>
            <h3>Name of dish</h3>
            <h4>$3.56</h4>
            <p>lorem</p>
            <h3></h3>
            <img src="/VeloLL.png"></img>
        </>

    )
}

export default Card;