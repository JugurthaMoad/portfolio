import React, { Component } from "react";
import { Link, GitI } from "./icons";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <span className="footer_icons">
          <a
            href="https://github.com/JugurthaMoad"
            target="_blank"
            rel="noreferrer"
          >
            <GitI />
          </a>
          <a
            href="https://www.linkedin.com/in/jugurtha-moad-951abb242/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Link />
          </a>
        </span>
        Designed & Built by Jugurtha Moad
      </div>
    </div>
  );
};

export default Footer;
