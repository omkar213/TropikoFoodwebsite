import React from "react";
import data from "../data/data.json";

const Footer = () => {
  return (
    <div className="Footer-container">
      {data.Footer.map((d, i) => (
        <div className="footer">
          <div className="fruits">
            <h3>{d.menu1}</h3>
            <ul>
              <li>{d.fruitmenu1}</li>
              <li>{d.fruitmenu2}</li>
              <li>{d.fruitmenu3}</li>
            </ul>
          </div>
          <div className="services">
            <h3>{d.menu2}</h3>
            <ul>
              <li>{d.servicemenu1}</li>
              <li>{d.servicemenu2}</li>
              <li>{d.servicemenu3}</li>
            </ul>
          </div>
          <div className="list">
            <h3>{d.menu3}</h3>
            <ul>
              <li>{d.listmenu1}</li>
              <li>{d.listmenu1}</li>
              <li>{d.listmenu1}</li>
            </ul>
          </div>
          <div className="Follow Us">
            <div className="social-container">
                <img src={d.socialimage1} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage2} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage3} alt="social-media" className="social-media-icons"/>
                <img src={d.socialimage4} alt="social-media" className="social-media-icons"/>
            </div>
            <div className="subscribe"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
