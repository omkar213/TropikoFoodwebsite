import React from "react";
import data from "../data/data.json";
import ScrollAnimation from "react-animate-on-scroll";

const Freshfruits = () => {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true" duration={1.2}>
    <div className="freshfruit-container container-spacing" id="fruit">
      <h2 className="commonheading">Fresh Fruits</h2>
      <p className="custom_subheading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      {data.Freshfruit.map((d, i) => (
        <div className="fruitinfo-container">
          <div className="fruitinfo">
            <div className="fruitinfo-body">
              <h3>{d.subheading1}</h3>
              <p>{d.submenu1}</p>
              <div className="btn-section">
                <button className="custom_black_btn">BUY NOW</button>
              </div>
            </div>
            <img src={d.image1} alt="" className="orangeimage" />
          </div>

          <div className="fruitinfo">
            <div className="fruitinfo-body">
              <h3>{d.subheading2}</h3>
              <p>{d.submenu2}</p>
              <div className="btn-section">
                <button className="custom_black_btn">BUY NOW</button>
              </div>
            </div>
            <img src={d.image2} alt="" className="grapesimage" />
          </div>

          <div className="fruitinfo">
            <div className="fruitinfo-body">
              <h3>{d.subheading3}</h3>
              <p>{d.submenu3}</p>
              <div className="btn-section">
                <button className="custom_black_btn">BUY NOW</button>
              </div>
            </div>
            <img src={d.image3} alt="" className="gauvaimage" />
          </div>
        </div>
      ))}
    </div>
    </ScrollAnimation>
  );
};

export default Freshfruits;
