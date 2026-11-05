import { useEffect, useState } from "react";
import "./Cefr.css";
import bg from "../Images/cgb.jpg";
import cert1 from "../Images/cfr1.png";
import cert2 from "../Images/cfr2.png";
import cert3 from "../Images/cfr3.png";
import cert4 from "../Images/cfr4.png";

const certificates = [cert1, cert2, cert3, cert4];

const Cefr = () => {
  const [selected, setSelected] = useState(null);

  // Esc bosilganda modalni yopish
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="cefr" style={{ backgroundImage: `url(${bg})` }}>
      <div className="cefr__overlay"></div>

      <div className="cefr__container">
        <h2 className="cefr__title">BIZNING SERTIFIKATLARIMIZ</h2>

        <div className="cefr__list">
          {certificates.map((src, index) => (
            <button
              key={index}
              className="cefr__item"
              onClick={() => setSelected(src)}
              aria-label={`${index + 1}-sertifikatni kattalashtirish`}
            >
              <img src={src} alt={`Sertifikat ${index + 1}`} className="cefr__img" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="cefr__modal" onClick={() => setSelected(null)}>
          <button
            className="cefr__close"
            onClick={() => setSelected(null)}
            aria-label="Yopish"
          >
            ✕
          </button>
          <img
            src={selected}
            alt="Sertifikat"
            className="cefr__modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Cefr;