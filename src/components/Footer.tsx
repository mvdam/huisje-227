import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE_NAME, SITE_URL } from "../config/site";
import "./Footer.css";

function Footer() {
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
  };

  return (
    <footer className="site-footer" aria-label="Sitefooter">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Contact</h3>
            <p>{SITE_NAME}</p>
            <p>Bongerdlaan 3</p>
            <p>1747 CA Tuitjenhorn</p>
            <p>Noord-Holland</p>
            <p>
              <a href="tel:0031226391481">022-6391481</a>
            </p>
            <p>
              <a href="mailto:bongerd227@gmail.com">bongerd227@gmail.com</a>
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Snelle links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/het-huisje">Het huisje</Link>
              </li>
              <li>
                <Link to="/het-park">Het Park</Link>
              </li>
              <li>
                <Link to="/tarieven">Tarieven &amp; Voorwaarden</Link>
              </li>
              <li>
                <Link to="/reserveren">Reserveren</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Nieuwsbrief</h3>
            <p>Nieuwsbriefinschrijving is nog niet beschikbaar.</p>
            <form
              className="footer-newsletter-form"
              aria-label="Nieuwsbrief aanmelding"
              onSubmit={handleSubmit}
            >
                <label htmlFor="footer-email" className="sr-only">
                  E-mailadres
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Uw e-mailadres"
                  required
                />
                <button type="submit">Aanmelden</button>
            </form>
            {submitAttempted && (
              <p role="status">
                Er is niets verstuurd. Probeer het later opnieuw.
              </p>
            )}
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/capfunbongerd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook (opent in nieuw tabblad)"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/capfundebongerd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (opent in nieuw tabblad)"
          >
            Instagram
          </a>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 {SITE_NAME}</span>
          <a href={SITE_URL}>www.vakantieopdebongerd.nl</a>
          <span>
            Template door{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorlib
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
