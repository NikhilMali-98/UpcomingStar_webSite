import React from 'react';
import "../styles/footer.scss";


const Footer = () => {
  return (
    <footer>
       <div>
      <h1>UpcomingStar</h1>
      <p>Copyright &copy; 2023 Upcoming Star.
      All rights reserved.</p>
    </div>

    <div>
      <h5>Follow Us</h5>
      <div>
        <a href="https://www.linkedin.com/in/nikhil-mali-461193274/" target={'blank'}>LinkeDin</a>
        <a href="https://www.instagram.com/nikhil_mali_1998/" target={'blank'}>Instagram</a>
        <a href="https://wa.me/919960728207" target={'blank'}>WhatsApp</a>
        <a href="https://github.com/NikhilMali-98" target={'blank'}>GitHub</a>

      </div>
    </div>
    </footer>
  )
}

export default Footer