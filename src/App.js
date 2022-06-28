import React from 'react';
import SmoothScroll from "smooth-scroll";
import AboutUs from './Components/AboutUs';
import Banner from './Components/Banner';
import Ourservice from './Components/Ourservice';
import Freshfruits from './Components/Freshfruits';
import ClientTestimonals from './Components/ClientTestimonals';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import './css/style.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function App() {
  
  return (
    <div>
       <Banner/>
       <AboutUs/>
       <Ourservice/>
       <Freshfruits/>
       <ClientTestimonals/>
       <Contactus/>
       <Footer/>
    </div>
  );
}

export default App;
