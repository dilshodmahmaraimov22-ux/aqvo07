import { useEffect, useState } from "react";
import "./Banner.css";
import bg1 from "../../assets/banner-1.jpg";
import bg2 from "../../assets/banner-2.jpg";
import bg3 from "../../assets/banner-3.jpg";

const slides = [
  {
    image: bg1,
    title: "AQVO BRENDI HAQIDA",
    text: "Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jiz mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini qozonib kelmoqda.",
  },
  {
    image: bg2,
    title: "SIFAT VA HALOLLIK",
    text: "Bu yerga ikkinchi slayd matnini yozasiz.",
  },
  {
    image: bg3,
    title: "YANGICHA TA’M",
    text: "Bu yerga uchinchi slayd matnini yozasiz.",
  },
];

const Banner = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner__slide ${
            index === active ? "banner__slide--active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="banner__overlay"></div>

          <div className="banner__content">
            <h2 className="banner__title">{slide.title}</h2>
            <p className="banner__text">{slide.text}</p>
          </div>
        </div>
      ))}

      <div className="banner__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`banner__dot ${
              index === active ? "banner__dot--active" : ""
            }`}
            onClick={() => setActive(index)}
            aria-label={`${index + 1}-slayd`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;