import { useState, FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Reserveren.css";

export default function Reserveren() {
  const [searchParams] = useSearchParams();
  const [aankomst, setAankomst] = useState(searchParams.get("aankomst") || "");
  const [vertrek, setVertrek] = useState(searchParams.get("vertrek") || "");
  const [volwassenen, setVolwassenen] = useState(searchParams.get("volwassenen") || "2");
  const [kinderen, setKinderen] = useState(searchParams.get("kinderen") || "0");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="reserveren-hero"
        style={{ backgroundImage: "url(/images/hero_3.jpg)" }}
      >
        <div className="reserveren-hero-overlay" />
        <div className="reserveren-hero-content">
          <h1 className="reserveren-hero-heading">Reserveren</h1>
          <nav aria-label="Kruimelpad">
            <ol className="reserveren-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="reserveren-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="reserveren-breadcrumb-current" aria-current="page">
                Reserveren
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Reservation Form + Details */}
      <section className="reserveren-section">
        <div className="reserveren-grid">
          <div className="reserveren-form">
            <h2>Boek ons huisje</h2>
            {submitted ? (
              <p className="reserveren-success" role="status">
                Bedankt! Uw reserveringsaanvraag is verstuurd. We nemen zo snel mogelijk contact met u op.
              </p>
            ) : (
              <form aria-label="Reserveringsformulier" onSubmit={handleSubmit}>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-naam">Naam</label>
                  <input
                    type="text"
                    id="reserveren-naam"
                    placeholder="Uw naam"
                    required
                  />
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-telefoon">Telefoon</label>
                  <input
                    type="tel"
                    id="reserveren-telefoon"
                    placeholder="Uw telefoonnummer"
                    required
                  />
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-email">E-mail</label>
                  <input
                    type="email"
                    id="reserveren-email"
                    placeholder="Uw e-mailadres"
                    required
                  />
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-aankomst">Aankomst</label>
                  <input
                    type="date"
                    id="reserveren-aankomst"
                    required
                    value={aankomst}
                    onChange={(e) => setAankomst(e.target.value)}
                  />
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-vertrek">Vertrek</label>
                  <input
                    type="date"
                    id="reserveren-vertrek"
                    required
                    value={vertrek}
                    onChange={(e) => setVertrek(e.target.value)}
                  />
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-volwassenen">Volwassenen</label>
                  <select
                    id="reserveren-volwassenen"
                    required
                    value={volwassenen}
                    onChange={(e) => setVolwassenen(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-kinderen">Kinderen</label>
                  <select
                    id="reserveren-kinderen"
                    required
                    value={kinderen}
                    onChange={(e) => setKinderen(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-opmerkingen">Opmerkingen</label>
                  <textarea
                    id="reserveren-opmerkingen"
                    placeholder="Eventuele opmerkingen of vragen"
                    rows={4}
                  />
                </div>
                <button type="submit" className="reserveren-btn-primary">
                  Reserveer nu
                </button>
              </form>
            )}
          </div>

          <div className="reserveren-details">
            <h2>Contactgegevens</h2>
            <address>
              Capfun De Bongerd
              <br />
              Bongerdlaan 3<br />
              1747 CA Tuitjenhorn
              <br />
              Noord-Holland
            </address>
            <ul className="reserveren-details-links">
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
        className="reserveren-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="reserveren-cta-overlay" />
        <div className="reserveren-cta-inner">
          <h2>Liever eerst even kijken?</h2>
          <Link to="/het-huisje" className="reserveren-btn-primary">
            Bekijk het huisje
          </Link>
        </div>
      </section>
    </>
  );
}
