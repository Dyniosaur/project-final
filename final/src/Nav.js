import { Link} from "react-router-dom";


const Nav = () => {
    return(
        <div className="item item2">
          <ul>
            <li><Link to="/#header">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#highlights">Menu</Link></li>
            <li><Link to="/bookingpage">Reservation</Link></li>
            <li><Link to="#">Order Online</Link></li>
            <li><Link to="#">Login</Link></li>
          </ul>
        </div>
      );
};


export default Nav;