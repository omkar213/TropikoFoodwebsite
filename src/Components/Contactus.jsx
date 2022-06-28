import React from "react";
import data from "../data/data.json";

const Contactus = () => {
  return (
    <div className="contactUs-container container-spacing">
      <h2 className="commonheading">Contact Us</h2>
      {data.Contactus.map((d, i) => (
        <div className="contact-div">
          <div className="contactus-form">
            <form>
              <input
                name="Name"
                type="text"
                class="feedback-input"
                placeholder="Name"
              />
              <input
                name="Email"
                type="email"
                class="feedback-input"
                placeholder="Email"
              />
              <input
                name="Phone Number"
                type="tel"
                class="feedback-input"
                placeholder="Number"
              />
              <textarea
                name="text"
                class="feedback-input"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="SUBMIT" className="contactus-submit"/>
            </form>
          </div>
          <div className="sub-bannerimg">
            <img src={d.image1} alt="fruitimage" className="contact-fruitimg"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contactus;
