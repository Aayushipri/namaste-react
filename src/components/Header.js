import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonToggle, setButtonToggle] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  const { loggedInUser } = data;
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>{loggedInUser}</li>
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
