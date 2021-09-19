import { useState } from "react";
import logo from "../../resources/StockPeNavBarLogo.png";
import "./navBar.css";
import './navBar.responsive.css'

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className={toggle ? "nav-toggle": ""}>
      <div className="nav-p1">
        <img src={logo} alt="No Logo" />
      </div>

      <div className={toggle ? "nav-p2-toggle": "nav-p2"}>
      <div className="nav-p1-inner">
        <ul className={toggle ? "nav-list-toggle": "nav-list"}>
          <li className="nav-item"> <a href="/">Home</a> </li>
          <li className="nav-item"><a href="/">Our Team</a></li>
          <li className="nav-item"><a href="/">FAQ's</a></li>
          <li className="nav-item"><a href="/">Contact</a></li>
        </ul>
      </div>
      <div className="nav-p2-inner">
        <button className="btn-primary">Get Started</button>
      </div>
      </div>
      <button className="navBar-toggle btn-invite" onClick={() =>setToggle(val => !val) } ><i class="fas fa-bars"></i></button>
    </nav>
  );
};
