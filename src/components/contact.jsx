import React, { Component } from "react";
import { Phone, Mail, Location } from "./icons";
const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <span className="contact_content">
        <h2 className="contact_title">Contact Me</h2>
        <div className="about_hr"></div>
      </span>
      <div className="contact_text">
        I am available to work on your projects and bring your ideas to life. I
        am just a click away.
      </div>
      <div className="contact_info_container">
        <div className="contact_infos">
          <span className="contact_info">
            <Location />
            <span>FRANCE </span>
          </span>
          <span className="contact_info">
            <Phone />
            <a href="tel:++33-7-61-35-47-29">++33 7 61 35 47 29</a>
          </span>
          <span className="contact_info">
            <Mail />
            <a href="mailto:moadjugurtha@gmail.com">moadjugurtha@gmail.com </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
