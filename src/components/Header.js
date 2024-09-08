import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonToggle, setButtonToggle] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() =>
              buttonToggle === "Login"
                ? setButtonToggle("Logout")
                : setButtonToggle("Login")
            }
            className="button-style"
          >
            {buttonToggle}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
