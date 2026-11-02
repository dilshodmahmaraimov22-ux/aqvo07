import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Siz izlagan ta'm, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada
          jamlanib, “Aqvo”'ga aylanadi!
        </p>

        <div className="footer__socials">
          <a
            href="https://instagram.com"
            className="footer__social"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://t.me"
            className="footer__social"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.5 3.5 2.8 10.7c-.8.3-.8 1.4 0 1.7l4.6 1.6 1.8 5.6c.2.6 1 .8 1.4.3l2.6-2.6 4.6 3.4c.6.4 1.4.1 1.6-.6l3.3-15.3c.2-.9-.7-1.6-1.5-1.3Z" />
              <path d="m7.4 14 10.4-7.4-8.2 9.6" />
            </svg>
          </a>
        </div>

        <p className="footer__copyright">© Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

export default Footer;