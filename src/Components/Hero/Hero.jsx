import "./Hero.css";
import banner from "../Images/hero_item.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__top">
        <h1 className="hero__title">TABIIY MAHSULOTLAR</h1>

        <div className="hero__container">
          <p className="hero__text">
            AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
            mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy
            dizaynda taqdim etuvchi yetakchi brend.
          </p>

          <button type="button" className="hero__btn">
            Buyurtma berish
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