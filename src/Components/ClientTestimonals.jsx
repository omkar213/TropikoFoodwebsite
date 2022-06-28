import React from "react";
import data from "../data/data.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from "react-animate-on-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const ClientTestimonals = () => {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true" duration={1.2}>
    <div className="clienttestimonals-container container-spacing">
      <h2 className="commonheading">Testimonial</h2>
      <p className="custom_subheading-text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have
      </p>
      {data.Clienttestimonals.map((d, i) => (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="client-container">
              <img src={d.Image} alt="client" className="clientImage" />
              <div className="client-details">
                <h2>{d.clientname}</h2>
                <p>{d.clientcomment}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-container">
              <img src={d.Image} alt="client" className="clientImage" />
              <div className="client-details">
                <h2>{d.clientname}</h2>
                <p>{d.clientcomment}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-container">
              <img src={d.Image} alt="client" className="clientImage" />
              <div className="client-details">
                <h2>{d.clientname}</h2>
                <p>{d.clientcomment}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-container">
              <img src={d.Image} alt="client" className="clientImage" />
              <div className="client-details">
                <h2>{d.clientname}</h2>
                <p>{d.clientcomment}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-container">
              <img src={d.Image} alt="client" className="clientImage" />
              <div className="client-details">
                <h2>{d.clientname}</h2>
                <p>{d.clientcomment}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ))}
    </div>
    </ScrollAnimation>
  );
};

export default ClientTestimonals;
