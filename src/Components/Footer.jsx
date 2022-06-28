import React from "react";
import data from "../data/data.json";

const Footer = () => {
  return (
    <div className="Footer-container">
      {data.Footer.map((d, i) => (
        <div className="footer">
          <div className="fruits content">
            <h3>{d.menu1}</h3>
            <ul className="quick-links">
              <li>{d.fruitmenu1}</li>
              <li>{d.fruitmenu2}</li>
              <li>{d.fruitmenu3}</li>
            </ul>
          </div>
          <div className="services content">
            <h3>{d.menu2}</h3>
            <ul className="quick-links">
              <li>{d.servicemenu1}</li>
              <li>{d.servicemenu2}</li>
              <li>{d.servicemenu3}</li>
            </ul>
          </div>
          <div className="list content">
            <h3>{d.menu3}</h3>
            <ul className="quick-links">
              <li>{d.listmenu1}</li>
              <li>{d.listmenu1}</li>
              <li>{d.listmenu1}</li>
            </ul>
          </div>
          <div className="FollowUs">
            <h3>Follow Us</h3>
            <div className="social-container">
                <img src={d.socialimage1} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage2} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage3} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage4} alt="social-media" className="social-media-icons"/>
            </div>
            <div className="subscribe">
              <h3>Subscribe Now</h3>
              <input type="email"/>
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      ))}
      <div className="copyright">
         <h6>Copyright © 2019 All Rights Reserved By Tropika</h6>
      </div>
    </div>
  );
};

export default Footer;
