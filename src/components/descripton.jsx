import React from "react";
import { Git, ReactI, SvelteI, JSI } from "./icons";
const Description = () => {
  return (
    <div className="description_container">
      <div className="description_content">
        <span className="description_text ">Hi, my name is </span>
        <h1 className="description_name">Jugurtha Moad.</h1>
        <h1 className="description_job">I build things for the web.</h1>
        <div className="description_info">
          <p>
            I’m a web developer specializing in building (and occasionally
            designing) exceptional digital experiences and working with
            technologies like :{" "}
            <span className="techno">
              <span>
                <ReactI /> React
              </span>{" "}
              <span>,</span>
              <span>
                <SvelteI /> Svelte
              </span>
              <span>,</span>
              <span>
                <JSI /> JavaScript
              </span>
              <span> and much more </span>
            </span>{" "}
          </p>
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
