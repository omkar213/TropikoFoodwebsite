import React, { useState } from "react";
import data from "../data/data.json";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/navbar.css";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      {data.Header.map((d, i) => (
        <nav key={d.name} className="navigation">
          <img src={d.logo} alt="logo" className="brand-name" />
          <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded);}}>
            <GiHamburgerMenu />
          </button>
          <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
            <ul>
                {d.menuItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.id}>{item.name}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="navbar-socialmedia">
                <img src={d.socialimage1} alt="social-media" className="nav-socialimg"/>
                <img src={d.socialimage2} alt="social-media" className="nav-socialimg"/>
                <img src={d.socialimage3} alt="social-media" className="nav-socialimg"/>
                <img src={d.socialimage4} alt="social-media" className="nav-socialimg"/>
          </div>
        </nav>
      ))}
    </div>
  );
};

// navbar-socialmedia

export default Header;
