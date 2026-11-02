import "./Marquee.css";

const text = "SIFATLI VA ISHONCHLI MAHSULOTLAR!";

const Marquee = () => {
  return (
    <section className="marquee">
      <div className="marquee__track">
        {[...Array(2)].map((_, i) => (
          <div className="marquee__group" key={i} aria-hidden={i === 1}>
            {[...Array(4)].map((_, j) => (
              <span className="marquee__item" key={j}>
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