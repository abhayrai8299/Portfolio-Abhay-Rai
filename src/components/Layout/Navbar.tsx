import { useState } from "react";

const links = [
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Stack", "#skills"],
  ["Credentials", "#achievements"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Abhay Rai home">
          <span className="brand-mark">AR</span>
          <span>Abhay Rai</span>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <i className={open ? "fas fa-times" : "fas fa-bars"} />
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="https://drive.google.com/file/d/1Yt7fYohJCODqBsmp25873ZHAgYrAt2aN/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume <i className="fas fa-arrow-up-right-from-square" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
