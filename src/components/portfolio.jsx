import React, { useEffect, useState } from "react";
import ScrollAnimation from "./scrollAnimation";
import { Up } from "./icons";
import Nav from "./nav";
import Description from "./descripton";
import About from "./about";
import Contact from "./contact";
import Works from "./works";
import Footer from "./footer";
const Portfolio = () => {
  const [display, setDisplay] = useState(false);
  const hundleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 70) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };
  });
  return (
    <div className="global_container">
      <Nav />

      <Description />
      <About />
      <Works />
      <Contact />

      <Up onClick={hundleClick} className={display ? "up" : "hide"} />
      <Footer />
    </div>
  );
};

export default Portfolio;
