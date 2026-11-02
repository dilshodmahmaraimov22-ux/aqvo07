import "./Marquee.css";

const text = "SIFATLI VA ISHONCHLI MAHSULOTLAR!";

const Marquee = () => {
  return (
    <section className="marquee">
      <div className="marquee__track">
        {[...Array(2)].map((_, groupIndex) => (
          <div className="marquee__group" key={groupIndex} aria-hidden={groupIndex === 1}>
            {[...Array(4)].map((_, i) => (
              <span className="marquee__text" key={i}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;