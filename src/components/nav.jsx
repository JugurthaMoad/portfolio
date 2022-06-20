import React, { useRef, useState, useEffect } from "react";
import { Logo, Menu, Close } from "./icons";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const displayMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      console.log("out ");
      displayMenu();
    }
  };
  useEffect(() => {
    if (showMenu) {
      console.log("menu");
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showMenu]);
  return (
    <nav className="nav_container">
      <div className="logo">
        <Logo className="logo" color="#64ffda" />
      </div>
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
        <div className="resume_btn">Resume</div>
      </div>
      <div className="nav_content_mobile">
        <Menu onClick={displayMenu} />
        <div ref={menuRef} className={showMenu ? "menu_content" : "hide"}>
          <div>
            <Close className="close_btn" onClick={displayMenu} />
          </div>
          <div className="menu_sub">
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
            <div className="resume_btn">Resume</div>
          </div>
        </div>
        <div className={showMenu ? "menu_bg" : "hide"}></div>
      </div>
    </nav>
  );
};

export default Nav;
