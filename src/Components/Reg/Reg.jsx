import { useState } from "react";
import "./Reg.css";
import bg from "../../assets/reg-bg.jpg";

const initialForm = {
  name: "",
  surname: "",
  phone: "",
  telegram: "",
  region: "",
  service: "",
  message: "",
};

const Reg = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initialForm);
  };

  return (
    <section className="reg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="reg__overlay"></div>

      <div className="reg__container">
        <div className="reg__info">
          <h2 className="reg__title">"AQVO" BILAN YANGICHA TA’MNI HIS ETING.</h2>

          <p className="reg__text">
            Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi.
            Bizning mahsulotlarimiz har bir iste'molchiga sifatli va innovatsion
            yondashuv orqali yangi, o'ziga xos ta'mni taqdim etadi. Aqvo – bu
            nafaqat ta'm, balki sog'lom va halol mahsulotlar bilan yangi
            tajribani his qilish imkoniyati. Yangi ta'mni biz bilan birga kashf
            eting va haqiqiy sifatni his eting.
          </p>

          <div className="reg__contacts">
            <p className="reg__contacts-title">Bog'lanish uchun telefon raqamlarimiz:</p>
            <a href="tel:+998957724444" className="reg__phone">
              Tel: +998957724444
            </a>
            <a href="tel:+998996440101" className="reg__phone">
              Tel: +998996440101
            </a>
          </div>
        </div>

        <form className="reg__form" onSubmit={handleSubmit}>
          <input
            className="reg__field"
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="reg__field"
            type="text"
            name="surname"
            placeholder="Familiyangiz"
            value={form.surname}
            onChange={handleChange}
            required
          />
          <input
            className="reg__field"
            type="tel"
            name="phone"
            placeholder="Telefon raqamingiz"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="reg__field"
            type="text"
            name="telegram"
            placeholder="Telegram username"
            value={form.telegram}
            onChange={handleChange}
          />
          <input
            className="reg__field"
            type="text"
            name="region"
            placeholder="Hudud"
            value={form.region}
            onChange={handleChange}
          />

          <select
            className="reg__field reg__select"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Xizmat turini tanlang
            </option>
            <option value="retail">Chakana savdo</option>
            <option value="wholesale">Ulgurji savdo</option>
            <option value="partner">Hamkorlik</option>
          </select>

          <textarea
            className="reg__textarea"
            name="message"
            placeholder="Xabar"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="reg__btn">
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reg;