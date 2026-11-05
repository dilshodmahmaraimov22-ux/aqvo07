import "./Banner.css";
import bg from "../Images/background.jpg";

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="banner__overlay"></div>

      <div className="banner__content">
        <h2 className="banner__title">AQVO BRENDI HAQIDA</h2>
        <p className="banner__text">
          Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion
          yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda
          taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jiz
          mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan
          holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini
          qozonib kelmoqda.
        </p>
      </div>
    </section>
  );
};

export default Banner;