import React from 'react'
import "../styles/header.scss";
// import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return (
  <nav>
    <h1>UpcomingStar</h1>
    <main>
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/#about"}>About</Link>
      <Link to={"/#brands"}>Brands</Link>
      <Link to={"/services"}>Services</Link>
      <Link to={"/contact"}>Contact</Link> 
      
      changes done for onclick navogation withou page reload*/}

      <HashLink to={"/#home"}>Home</HashLink>
      <HashLink to={"/#about"}>About</HashLink>
      <HashLink to={"/#brands"}>Brands</HashLink>
      <HashLink to={"/services"}>Services</HashLink>
      <HashLink to={"/contact"}>Contact</HashLink>
    </main>
  </nav>
  )
}

export default Header