import "./Nav.css";
import logo from "../Images/logo.png";


// Rasmlarni public/nav/ papkasiga top-1.jpg ... top-6.jpg va bottom-1.jpg ... bottom-9.jpg nomi bilan qo'ying
const topImages = Array.from({ length: 6 }, (_, i) => `/nav/top-${i + 1}.jpg`);
const bottomImages = Array.from({ length: 9 }, (_, i) => `/nav/bottom-${i + 1}.jpg`);

const Row = ({ images, reverse, small }) => {
  return (
    <div className={`nav__row ${small ? "nav__row--small" : ""}`}>
      <div className={`nav__track ${reverse ? "nav__track--reverse" : ""}`}>
        {[0, 1].map((group) => (
          <div className="nav__group" key={group} aria-hidden={group === 1}>
            {/* keng ekranlarda bo'sh joy qolmasligi uchun ro'yxat ikki marta yoziladi */}
            {[...images, ...images].map((src, i) => (
              <img key={i} src={src} alt="" className="nav__img" loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <section className="nav">
      <div className="nav__container">
        <h2 className="nav__title">
          Sizning AQVO bilan lahzalaringiz
          <img src={logo} alt="AQVO" className="nav__logo" />
        </h2>

        <div className="nav__links">
          <a
            href="https://instagram.com"
            className="nav__link"
            target="_blank"
            rel="noreferrer"
          >
            Bizning Instagram
          </a>
          <a
            href="https://t.me"
            className="nav__link"
            target="_blank"
            rel="noreferrer"
          >
            Bizning Telegram
          </a>
        </div>
      </div>

      <Row images={topImages} />
      <Row images={bottomImages} reverse small />
    </section>
  );
};

export default Nav;