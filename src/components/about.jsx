import React, { useState } from "react";
const About = () => {
  const [front, setFront] = useState(true);
  const [api, setApi] = useState(false);
  const [back, setBack] = useState(false);
  const [others, setOthers] = useState(false);
  const frontClick = () => {
    setFront(true);
    setBack(false);
    setApi(false);
    setOthers(false);
  };

  const apiClick = () => {
    setApi(true);
    setFront(false);
    setBack(false);
    setOthers(false);
  };

  const backClick = () => {
    setBack(true);
    setFront(false);
    setApi(false);
    setOthers(false);
  };

  const othersClick = () => {
    setOthers(true);
    setBack(false);
    setFront(false);
    setApi(false);
  };
  return (
    <div id="about" className="about_container">
      <span className="about_title">
        <h2 className="about_t_d">Me :</h2>
        <div className="about_hr"></div>
      </span>
      <div className="about_description">
        <div className="about_description_text">
          Hello! My name is Jugurtha Moad. I enjoy creating things that live on
          the internet. My interest in web development started when I discovered
          React Js. I also love creating algorithms to solve problems related to
          computer science.
          <div className="about_skills_container">
            <span className="about_skills">
              <h2 className="about_t_d">Skills :</h2>
              <div className="about_hr"></div>
            </span>
            <div className="stack">
              <div className="stack_elm">
                <ul>
                  <li
                    onClick={frontClick}
                    className={front ? "active_li" : " "}
                  >
                    FrontEnd
                  </li>
                  <li onClick={apiClick} className={api ? "active_li" : " "}>
                    API
                  </li>
                  <li onClick={backClick} className={back ? "active_li" : " "}>
                    BackEnd
                  </li>
                  <li
                    className={others ? "active_li" : " "}
                    onClick={othersClick}
                  >
                    Others
                  </li>
                </ul>
              </div>
              <div className="stack_content">
                <div className={front ? "stack_description" : "hide"}>
                  <h3 className="stack_title">Currently, I'm using:</h3>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>ReactJs</li>
                    <li>Tailwindcss</li>
                  </ul>
                </div>
                <div className={api ? "stack_description" : "hide"}>
                  <h3 className="stack_title">Currently, I'm using:</h3>
                  <ul>
                    <li>A REST API with the help of axios</li>
                  </ul>
                </div>
                <div className={back ? "stack_description" : "hide"}>
                  <h3 className="stack_title">Currently, I'm using:</h3>
                  <ul>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className={others ? "stack_description" : "hide"}>
                  <h3 className="stack_title">Currently, I'm using:</h3>
                  <ul>
                    <li>Git/Github</li>
                    <li>Linux</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="./me.png" alt="myPhoto" />
      </div>
    </div>
  );
};

export default About;
