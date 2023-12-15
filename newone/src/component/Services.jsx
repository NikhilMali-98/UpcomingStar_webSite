import React from 'react'
import {Carousel} from  "react-responsive-carousel";
import img3 from "../asset/3.jpg";
import img4 from "../asset/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";  // carousal css file 

const Services = () => {
  return (
    <div className='services'>
      <Carousel  
      infiniteLoop 
      autoPlay 
      showArrows ={false}
      showStatus={false}
      showThumbs={false}
      // showIndicators={false}
      interval={1000}
      >
        <div>
          <img src={img3} alt="item1" />
          <p className='legend'>Full Stack</p>+
        </div>
        <div>
          <img src={img4} alt="item2" />
          <p className='legend'>Peer-to-Peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
