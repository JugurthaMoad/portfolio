import React from "react";
import {
  Folder,
  GitI,
  Tailwindcss,
  Gitt,
  JSI,
  ReactI,
  TP,
  Css3,
} from "./icons";
const Work = ({ title, description, link, tech, st }) => {
  return (
    <div className="work_container">
      <a className="work_container" href={link} target="blank" rel="noreferrer">
        <div className="work_content">
          <span className="work_header">
            <Folder />
            <GitI />
          </span>
          <span className="work_title">{title}</span>
          <div className="work_description">{description}</div>
          <span className="work_tech">
            <Gitt />
            {tech === "JS" ? <JSI /> : <TP />}
            <ReactI />
            {st === "CSS" ? <Css3 /> : <Tailwindcss />}
          </span>
        </div>
      </a>
    </div>
  );
};

export default Work;
