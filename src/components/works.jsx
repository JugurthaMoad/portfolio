import React from "react";
import Work from "./work";
const Works = () => {
  return (
    <div id="works" className="works_container">
      <span className="about_title">
        <h2 className="work_t">Works</h2>
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
            "Building a responsive copy of Promofocus web site and adding a new feature with the use of : TypeScript, ReactJs, Css3"
          }
          link={"https://github.com/JugurthaMoad/PromodoFocus"}
          tech={"TS"}
          st={"CSS"}
        />

        <Work
          title="My Portfolio"
          description={
            "Building a responsive Portfolio with the use of : JavaScript, ReactJs, Css3"
          }
          link={"https://github.com/JugurthaMoad/portfolio"}
          tech={"JS"}
          st={"CSS"}
        />
        <Work
          title="Other projects"
          description={
            "Building other projects that are available in my github with the use of : JavaScript, ReactJs, Css3"
          }
          link={"https://github.com/JugurthaMoad?tab=repositories"}
          tech={"JS"}
          st={"CSS"}
        />
      </div>
    </div>
  );
};

export default Works;
