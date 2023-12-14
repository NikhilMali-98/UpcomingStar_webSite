import React from 'react'
import "../styles/service.scss";
import { Carousel} from  "react-responsive-carousel";
import img3 from "../asset/3.jpg";
import img4 from "../asset/4.jpg";

const Services = () => {
  return (
    <div className='service'>
      <Carousel>
        <div>
          <img src={img3} alt="item1" />
          <p>Full Stack</p>
        </div>
        <div>
          <img src={img4} alt="item2" />
          <p>Peer-to-Peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
