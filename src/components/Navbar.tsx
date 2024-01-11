import resume from "../../public/Kyriel_Abad_Resume_032022.pdf";
import "./Navbar.css";

export default function Navbar() {
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
          <a href="/" className="logo">
            /home/skybound
          </a>
          <p>placeholder for button</p>
        </div>
      </header>
    </>
  );
}
