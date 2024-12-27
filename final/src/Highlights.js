import Card from "./Card.js"
import Button from "./Button.js"

const Highlights = () => {
    return(
        <div className="highlights">
            <div className="high1">
                <h1>This week's Specials ! </h1>
                <div className="btnmenu">
                <Button content="Offres Menu"/>
                </div>
            </div>
            <div className="high2">
                <Card image="/GreekSalad.png"/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default Highlights;