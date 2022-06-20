import React, { Component } from "react";
import Nav from "./nav";
import Description from "./descripton";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
const Portfolio = () => {
  return (
    <div className="global_container">
      <Nav />
      <Description />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
