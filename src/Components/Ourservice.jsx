import React from "react";
import data from "../data/data.json";

const Ourservice = () => {
  return (
    <div className="ourservice-container container-spacing" id="service">
      <h2 className="commonheading">Our Services</h2>
      <p className="custom_subheading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      {data.Ourservices.map((d, i) => (
        <div key={d.name} className="fruitscard-container">
          <div className="card">
            <img src={d.image1} alt="fruit" className="fruitimg" />
            <div className="card-body">
              <h4>{d.cardheading1}</h4>
              <p className="card-text">{d.subinfo1}</p>
            </div>
          </div>

          <div className="card">
            <img src={d.image2} alt="fruit" className="fruitimg" />
            <div className="card-body">
              <h4>{d.cardheading2}</h4>
              <p className="card-text">{d.subinfo2}</p>
            </div>
          </div>

          <div className="card">
            <img src={d.image3} alt="fruit" className="fruitimg" />
            <div className="card-body">
              <h4>{d.cardheading3}</h4>
              <p className="card-text">{d.subinfo3}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="readmore">
        <button className="custom_subheading-text">Read More</button>
      </div>
    </div>
  );
};

export default Ourservice;
