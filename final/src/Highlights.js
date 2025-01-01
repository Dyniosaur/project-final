import Card from "./Card.js"
import Button from "./Button.js"

const Highlights = () => {
    return(
        <>
            <div className="high1">
                <h1>This week's Specials ! </h1>
                <div className="btnmenu">
                    <Button content="Offres Menu"/>
                </div>
            </div>

            <div className="highlights">
                <Card image="./GreekSalade.png" name="Greek Salade" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit sdzq dffc dsqz consectetur adipiscing elit. Mauris sit sdzq dffc dsqz"/>
                <Card image="./Brushetta.png" name="Brushetta" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit sdzq dffc dsqz consectetur adipiscing elit. Mauris sit sdzq dffc dsqz"/>
                <Card image="./lemon dessert.png" name="Lemon Dessert" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit sdzq dffc dsqz consectetur adipiscing elit. Mauris sit sdzq dffc dsqz"/>
            </div>
        </>
    )
}
export default Highlights;