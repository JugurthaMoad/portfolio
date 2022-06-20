import React from "react";
import { Git } from "./icons";
const Description = () => {
  return (
    <div className="description_container">
      <div className="description_content">
        <span className="description_text ">Hi, my name is </span>
        <h1 className="description_name">Jugurtha Moad.</h1>
        <h1 className="description_job">I build things for the web.</h1>
        <div className="description_info">
          I’m a web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m using
          JavaScript.
        </div>
        <span className="description_btn">
          <a
            href="https://github.com/JugurthaMoad"
            target="_blank"
            rel="noreferrer"
          >
            Check out my <Git />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Description;
