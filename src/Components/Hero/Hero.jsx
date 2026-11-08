import "./Hero.css";
import logoCircle from "../Images/logo.png";
import banner from "../Images/hero_item.jpg";

const Hero = () => {
  const handleLogoClick = () => {

    console.log("Logo bosildi");
  };

  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__container">
          <p className="hero__text">
            AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
            mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy
            dizaynda taqdim etuvchi yetakchi brend.
          </p>

          <button
            type="button"
            className="hero__logo-btn"
            onClick={handleLogoClick}
            aria-label="AQVO mahsulotlariga o'tish"
          >
            <img
              src={logoCircle}
              alt="AQVO logotipi"
              className="hero__logo-img"
            />
          </button>
        </div>
      </div>

      <div className="hero__banner">
        <img
          src={banner}
          alt="AQVO mahsulotlari"
          className="hero__banner-img"
        />
      </div>
    </section>
  );
};

export default Hero;