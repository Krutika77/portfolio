import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">Krutika Desai</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link">
                Projects
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu (Mobile Only) */}
        <button className="header__hamburger">
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
