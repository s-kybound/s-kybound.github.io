import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="navbar-header">
        <a href="/" className="logo">
          /home/skybound
        </a>
        <ul>
          <li>
            <a href="/">home</a>
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
      </header>
    </>
  );
}
