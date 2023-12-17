import React from 'react';
import "../styles/home.scss";
import imge from "../asset/2.webp";
import {AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillContacts} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div  className="home" id='home'>
      <main>
        <h1>UpcomingStar</h1>
        <p>One solution to all problems.</p>
      </main>
    </div>

    <div className="home2">
        <img src={imge} alt="Graphics" />
        <div>
          <p>
            We are your one and only one solution to the Tech problems you face every day. We are leading tech company 
            whose aim is to the increase problem solving ability in children.
          </p>
        </div>
    </div>
    
    <div className="home3" id='about'>
      <div>
      <h1>Who we are...?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non voluptates voluptatem id autem natus deleniti, doloribus quibusdam aut, vero officia tempore sit harum. At debitis tempore nostrum praesentium harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat. Temporibus inventore nam, consequatur delectus laboriosam ea numquam voluptatem quo voluptatibus animi? Omnis nam placeat architecto blanditiis? Reprehenderit, praesentium! Nihil?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat. Temporibus inventore nam, consequatur delectus laboriosam ea numquam voluptatem quo voluptatibus animi? Omnis nam placeat architecto blanditiis? Reprehenderit, praesentium! Nihil?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat. Temporibus inventore nam, consequatur delectus laboriosam ea numquam voluptatem quo voluptatibus animi? Omnis nam placeat architecto blanditiis? Reprehenderit, praesentium! Nihil?
      </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s",}
          }>
            {/* <a href="https://www.linkedin.com/in/nikhil-mali-461193274/" target={'blank'}> */}
            <AiFillLinkedin/>
            <p>LinkeDin</p>
            {/* </a> */}
          </div>

          <div style={{
            animationDelay: "0.6s",}
          }>
            {/* <a href="https://github.com/NikhilMali-98" target={'blank'}> */}
            <AiFillGithub/>
            <p>GitHub</p>
            {/* </a> */}
          </div>

          <div style={{
            animationDelay: "0.9s",}
          }>
            {/* <a href="https://portfolionikhilmali.000webhostapp.com/" target={'blank'}> */}
            <AiFillContacts/>
            <p>PortFolio</p>
            {/* </a> */}
          </div>

          <div style={{
            animationDelay: "1.2",}
          }>
            {/* <a href="https://www.instagram.com/nikhil_mali_1998/" target={'blank'}> */}
            <AiFillInstagram/>
            <p>Instagram</p>
            {/* </a> */}
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home