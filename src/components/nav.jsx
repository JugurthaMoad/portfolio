import React, { useRef, useState } from "react";
import { Menu, Close } from "./icons";
import { saveAs } from "file-saver";
import pdf from "../../src/Document/jugurthaMoad.pdf";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const hundlePdfClick = () => {
    saveAs(pdf, "JugurthaMoad.pdf");
  };
  const displayMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      displayMenu();
    }
  };
  return (
    <nav className="nav_container">
      <img src="./fc.png" alt="logo" className="logo" />

      <div className="nav_content">
        <ul>
          <li onClick={displayMenu}>
            <a href="#about">About</a>
          </li>

          <li onClick={displayMenu}>
            <a href="#works">Works</a>
          </li>
          <li onClick={displayMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={hundlePdfClick} className="resume_btn">
          Resume
        </div>
      </div>
      <div className="nav_content_mobile">
        <Menu onClick={displayMenu} />
        <div className={showMenu ? "menu_content" : "hide"}>
          <div>
            <Close className="close_btn" onClick={displayMenu} />
          </div>
          <div ref={menuRef} className="menu_sub">
            <ul>
              <li onClick={displayMenu}>
                <a href="#about">About</a>
              </li>

              <li onClick={displayMenu}>
                <a href="#works">Works</a>
              </li>
              <li onClick={displayMenu}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div onClick={hundlePdfClick} className="resume_btn">
              Resume
            </div>
          </div>
        </div>
        <div
          onClick={handleClickOutside}
          className={showMenu ? "menu_bg" : "hide"}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
