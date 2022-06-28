import React from "react";
import data from "../data/data.json";


const AboutUs = () => {
  return (
    <div className="aboutus-container container-spacing" id="aboutus">
      <h2 className="commonheading">About Us</h2>
      <p className="custom_subheading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      {data.AboutUs.map((d, i) => (
          <div className="aboutusInfo">
            <img src={d.Imageaboutus} alt="image2" className="imageaboutus" />
            <div className="btn-section">
              <button className="custom_black_btn">READ MORE</button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default AboutUs;
