import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="contact-hero"
        style={{ backgroundImage: "url(/images/hero_3.jpg)" }}
      >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-heading">Contact</h1>
          <nav aria-label="Kruimelpad">
            <ol className="contact-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="contact-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="contact-breadcrumb-current" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-form">
            <h2>Stuur ons een bericht</h2>
            {submitted ? (
              <p className="contact-success" role="status">
                Bedankt! Uw bericht is verstuurd.
              </p>
            ) : (
              <form aria-label="Contactformulier" onSubmit={handleSubmit}>
                <div className="contact-form-field">
                  <label htmlFor="contact-naam">Naam</label>
                  <input
                    type="text"
                    id="contact-naam"
                    placeholder="Uw naam"
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="contact-telefoon">Telefoon</label>
                  <input
                    type="tel"
                    id="contact-telefoon"
                    placeholder="Uw telefoonnummer"
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="contact-email">E-mail</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="Uw e-mailadres"
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="contact-bericht">Bericht</label>
                  <textarea
                    id="contact-bericht"
                    placeholder="Uw bericht"
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="contact-btn-primary">
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

          <div className="contact-details">
            <h2>Contactgegevens</h2>
            <address>
              Capfun De Bongerd
              <br />
              Bongerdlaan 3<br />
              1747 CA Tuitjenhorn
              <br />
              Noord-Holland
            </address>
            <ul className="contact-details-links">
              <li>
                Park: <a href="tel:0031226391481">022-6391481</a>
              </li>
              <li>
                Nikki: <a href="tel:0031653308199">0653308199</a>
              </li>
              <li>
                Martin: <a href="tel:0031651190382">0651190382</a>
              </li>
              <li>
                E-mail:{" "}
                <a href="mailto:bongerd227@gmail.com">bongerd227@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="contact-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="contact-cta-overlay" />
        <div className="contact-cta-inner">
          <h2>Wil je ook van ons huisje gebruik maken?</h2>
          <Link to="/reserveren" className="contact-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
