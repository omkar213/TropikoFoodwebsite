import React from "react";
import data from "../data/data.json";

const Banner = () => {
  return (
    <>
      {data.Banner.map((d, i) => (
        <div key={d.name} className="banner-container container-spacing">
          <div className="banner-info">
            <h1>{d.bannerheading}</h1>
            <p className="commonfontsizeforp">{d.subinfo}</p>
            <div className="btn-section">
              <button className="custom_orange_btn">SHOP NOW</button>
              <button className="custom_black_btn">CONTACT US</button>
            </div>
          </div>
          <div className="bannerimg-section">
            <img src={d.bannerImage} alt="" className="banner-img" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
