import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <button
          className={`header__burger ${menuOpen ? "header__burger--active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          
          <a href="#about" className="header__link" onClick={() => setMenuOpen(false)}>
            Biz haqimizda
          </a>
        </nav>

        <a href="/" className="header__logo">
          {/* <img src={logo} alt="AQVO" className="header__logo-img" /> */}
        </a>

        <div className="header__right">
          <button className="header__lang">
            UZB
            <span className="header__lang-arrow"></span>
          </button>
          <button className="header__btn">Bog'lanish</button>
        </div>
      </div>
    </header>
  );
};

export default Header;