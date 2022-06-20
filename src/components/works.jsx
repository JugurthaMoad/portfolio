import React from "react";
import Work from "./work";
const Works = () => {
  return (
    <div id="works" className="works_container">
      <span className="about_title">
        <h2 className="work_t">My Works</h2>
        <div className="about_hr"></div>
      </span>
      <div className="works_info">
        <Work
          title="E-Store web application with ReactJS"
          description={
            "Building a responsive E-Sotre web application with the use of : JavaScript, ReactJs, Taillwinds"
          }
          link={"https://github.com/JugurthaMoad/e_store"}
          tech={"JS"}
        />
        <Work
          title="A copy of Promofocus site"
          description={
            "Building a responsive copy of Promofocus web site and adding a new feature with the use of : TypeScript, ReactJs, Css"
          }
          link={"https://github.com/JugurthaMoad/PromodoFocus"}
          tech={"TS"}
        />
        <Work
          title="E-Store web application with ReactJS"
          description={
            "Building a responsive E-Sotre web application with the use of : JavaScript, ReactJs, Taillwinds"
          }
          link={"https://github.com/JugurthaMoad/e_store"}
          tech={"JS"}
        />
        <Work
          title="E-Store web application with ReactJS"
          description={
            "Building a responsive E-Sotre web application with the use of : JavaScript, ReactJs, Taillwinds"
          }
          link={"https://github.com/JugurthaMoad/e_store"}
          tech={"JS"}
        />
      </div>
    </div>
  );
};

export default Works;
