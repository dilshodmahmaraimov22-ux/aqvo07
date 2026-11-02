import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
          <Link className="header__link" to="/">Bosh sahifa</Link>
          <Link className="header__link" to="/about">Biz haqimizda</Link>
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