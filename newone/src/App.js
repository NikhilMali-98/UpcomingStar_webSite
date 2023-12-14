import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/app.scss";
import "./styles/header.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Brands from "./component/Brands";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
