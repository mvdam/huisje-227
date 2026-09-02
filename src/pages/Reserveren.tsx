import { useState, FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AVAILABILITY,
  getAvailabilityStatus,
  parseLocalDate,
} from "../data/reservations";
import { publicAssetUrl } from "../utils/publicAsset";
import "./Reserveren.css";

const MONTH_ABBR = [
  "jan",
  "feb",
  "mrt",
  "apr",
  "mei",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];

function getWeeks(): { start: Date; end: Date }[] {
  const weeks: { start: Date; end: Date }[] = [];
  let current = parseLocalDate(AVAILABILITY.seasonStart);
  while (current.getDay() !== 6) current.setDate(current.getDate() + 1);
  const endDate = parseLocalDate(AVAILABILITY.seasonEnd);
  while (current < endDate) {
    let weekEnd = new Date(current);
    weekEnd.setDate(weekEnd.getDate() + 7);
    if (weekEnd > endDate) weekEnd = new Date(endDate);
    weeks.push({ start: new Date(current), end: weekEnd });
    current = weekEnd;
  }
  return weeks;
}

function isWeekBooked(weekStart: Date, weekEnd: Date): boolean {
  return AVAILABILITY.reservedPeriods.some((period) => {
    const ps = parseLocalDate(period.start);
    const pe = parseLocalDate(period.end);
    return weekStart < pe && weekEnd > ps;
  });
}

function isWeekPast(weekEnd: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return weekEnd <= today;
}

function formatDate(d: Date): string {
  return `${d.getDate()} ${MONTH_ABBR[d.getMonth()]}`;
}

export default function Reserveren() {
  const [searchParams] = useSearchParams();
  const [aankomst, setAankomst] = useState(searchParams.get("aankomst") || "");
  const [vertrek, setVertrek] = useState(searchParams.get("vertrek") || "");
  const [volwassenen, setVolwassenen] = useState(
    searchParams.get("volwassenen") || "2",
  );
  const [kinderen, setKinderen] = useState(searchParams.get("kinderen") || "0");
  const [baby, setBaby] = useState(searchParams.get("baby") || "0");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const availabilityStatus = getAvailabilityStatus(aankomst, vertrek);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="reserveren-hero"
        style={{ backgroundImage: publicAssetUrl("images/hero_3.jpg") }}
      >
        <div className="reserveren-hero-overlay" />
        <div className="reserveren-hero-content">
          <h1 className="reserveren-hero-heading">Reserveren</h1>
          <nav aria-label="Kruimelpad">
            <ol className="reserveren-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className="reserveren-breadcrumb-separator"
                aria-hidden="true"
              >
                &gt;
              </li>
              <li className="reserveren-breadcrumb-current" aria-current="page">
                Reserveren
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Availability Overview */}
      <section className="reserveren-availability">
        <h2>Beschikbaarheid</h2>
        <p className="reserveren-availability-intro">
          Hieronder zie je welke weken nog beschikbaar zijn. Selecteer je
          gewenste aankomst- en vertrekdatum in het formulier om te controleren
          of deze periode vrij is.
        </p>
        <h3 className="reserveren-calendar-year">Seizoen {AVAILABILITY.year}</h3>
        <div className="reserveren-calendar">
          {getWeeks().map((week, i) => {
            const booked = isWeekBooked(week.start, week.end);
            const expired = isWeekPast(week.end);
            return (
              <div
                key={i}
                className={`week-block ${booked ? "booked" : expired ? "expired" : "available"}`}
              >
                {formatDate(week.start)} – {formatDate(week.end)}
                <span className="week-block-label">
                  {booked ? "bezet" : expired ? "verlopen" : "beschikbaar"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reservation Form + Details */}
      <section className="reserveren-section">
        <div className="reserveren-grid">
          <div className="reserveren-form">
            <h2>Boek ons huisje</h2>
            <p className="reserveren-notice">
              Online aanvragen versturen is nog niet beschikbaar. Vul het
              formulier gerust in om je periode te controleren en neem daarna
              telefonisch of per e-mail contact met ons op.
            </p>
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
                    min={new Date().toISOString().split("T")[0]}
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
                    min={aankomst || new Date().toISOString().split("T")[0]}
                    value={vertrek}
                    onChange={(e) => setVertrek(e.target.value)}
                  />
                </div>
                {aankomst &&
                  vertrek &&
                  (availabilityStatus === "booked" ? (
                    <p className="reserveren-conflict" role="alert">
                      ⚠️ Helaas, de gekozen periode overlapt met een bestaande
                      reservering.
                    </p>
                  ) : availabilityStatus === "available" ? (
                    <p className="reserveren-available" role="status">
                      ✓ De gekozen periode is beschikbaar!
                    </p>
                  ) : availabilityStatus === "invalid" ? (
                    <p className="reserveren-conflict" role="alert">
                      De vertrekdatum moet na de aankomstdatum liggen.
                    </p>
                  ) : (
                    <p className="reserveren-unknown" role="status">
                      Voor deze periode is nog geen beschikbaarheid gepubliceerd.
                      Neem contact met ons op voor een controle.
                    </p>
                  ))}
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
                  </select>
                </div>
                <div className="reserveren-form-field">
                  <label htmlFor="reserveren-baby">Baby</label>
                  <select
                    id="reserveren-baby"
                    required
                    value={baby}
                    onChange={(e) => setBaby(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
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
            {submitAttempted && (
              <p className="reserveren-unknown" role="status">
                Er is niets verstuurd. Bel Nikki of Martin, of mail naar{" "}
                <a href="mailto:bongerd227@gmail.com">bongerd227@gmail.com</a>.
              </p>
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
        style={{ backgroundImage: publicAssetUrl("images/hero_4.jpg") }}
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
