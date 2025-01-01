import Nav from "./Nav";

const Header = () => {
    return(
        <div className= "header">
            <div className='item item1'>
                <img src = "/logoLL.png"></img>
            </div>
            <Nav/>
            <img className= "hamburger" src="./🦆 icon _hamburger menu.svg"></img>
        </div>
    )
}

export default Header;