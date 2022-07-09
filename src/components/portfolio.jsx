import React, { useEffect, useState, Suspense, lazy } from "react";
import { Up } from "./icons";
import Nav from "./nav";
import Description from "./descripton";

const Portfolio = () => {
  const [display, setDisplay] = useState(false);
  const hundleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  const About = lazy(() => import("./about"));
  const Works = lazy(() => import("./works"));
  const Contact = lazy(() => import("./contact"));
  const Footer = lazy(() => import("./footer"));
  return (
    <div className="global_container">
      <Nav />
      <Description />
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <Works />
      </Suspense>
      <Suspense fallback={<div />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Portfolio;
