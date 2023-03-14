import "./navbar.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import kokonatiSvg from "./assets/kokonati.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-left-menu cursor">Home</div>
          <div className="navbar-left-menu cursor">Shop</div>
          <div className="navbar-left-menu cursor">Contact us</div>
        </div>
        <div className="navbar-center">
          <img src={kokonatiSvg} alt="kokonati" width={200} />
        </div>
        <div className="navbar-right">
          <div className="navbar-right-menu cursor">
            <AiOutlineSearch size={25} />
          </div>
          <div className="navbar-right-menu cursor">
            <AiOutlineShoppingCart size={25} />
          </div>
          <div className="navbar-right-menu cursor">
            <FiMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
