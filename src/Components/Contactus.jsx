import React from "react";
import data from "../data/data.json";
import ScrollAnimation from "react-animate-on-scroll";

const Contactus = () => {
  return (
    <div className="contactUs-container container-spacing" id="contactus">
      <h2 className="commonheading">Contact Us</h2>
      {data.Contactus.map((d, i) => (
        <div className="contact-div">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce="true"
            duration={1.2}
          >
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
                <input
                  type="submit"
                  value="SUBMIT"
                  className="contactus-submit"
                />
              </form>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce="true"
            duration={1.2}
          >
          <div className="sub-bannerimg">
            <img src={d.image1} alt="fruitimage" className="contact-fruitimg" />
          </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default Contactus;
