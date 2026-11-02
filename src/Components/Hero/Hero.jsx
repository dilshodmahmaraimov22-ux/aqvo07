import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__container">
          <p className="hero__text">
            AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
            mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy
            dizaynda taqdim etuvchi yetakchi brend.
          </p>

          <div className="hero__logo">
            {/* <img src={logoCircle} alt="AQVO logotipi" className="hero__logo-img" /> */}
          </div>
        </div>
      </div>

      <div className="hero__banner">
        {/* <img src={banner} alt="AQVO mahsulotlari" className="hero__banner-img" /> */}
      </div>
    </section>
  );
};

export default Hero;