import React from "react";
import resume from "../../public/Kyriel_Abad_Resume_051324.pdf";
import "./Navbar.css";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    console.log("toggle menu");
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="navbar-header">
        <ul className="left-items">
          <li>
            <a href="/" className="logo">
              /home/skybound
            </a>
          </li>
          <li>
            <a href="/education">education</a>
          </li>
          <li>
            <a href="/experience">experience</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/notes">notes</a>
          </li>
          <li>
            <a href="/blog">blog</a>
          </li>
          <li>
            <a href="/files">files</a>
          </li>
        </ul>
        <ul className="right-items">
          <li>
            <a href={resume}>resume</a>
          </li>
        </ul>
        <div className="mobile">
          <div className="centered-container">
            <a href="/" className="logo">
              skybound
            </a>
            <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
              {menuOpen ? <IoClose /> : <IoMenu />}
            </div>
            <div className={menuOpen ? "shownMenu" : "hiddenMenu"} id="menu">
              <ul className="down-items">
                <li>
                  <a href="/education">education</a>
                </li>
                <li>
                  <a href="/experience">experience</a>
                </li>
                <li>
                  <a href="/projects">projects</a>
                </li>
                <li>
                  <a href="/notes">notes</a>
                </li>
                <li>
                  <a href="/blog">blog</a>
                </li>
                <li>
                  <a href="/files">files</a>
                </li>
                <li>
                  <a href={resume}>resume</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
