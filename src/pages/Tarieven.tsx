import { Link } from "react-router-dom";
import "./Tarieven.css";

export default function Tarieven() {
  return (
    <>
      {/* Hero */}
      <section
        className="tarieven-hero"
        style={{ backgroundImage: "url(/images/hero_1.jpg)" }}
      >
        <div className="tarieven-hero-overlay" />
        <div className="tarieven-hero-content">
          <h1 className="tarieven-hero-heading">Tarieven &amp; Voorwaarden</h1>
          <nav aria-label="Kruimelpad">
            <ol className="tarieven-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="tarieven-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="tarieven-breadcrumb-current" aria-current="page">
                Tarieven &amp; Voorwaarden
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Price Banner */}
      <section className="tarieven-price-banner">
        <h2 className="tarieven-price-label">Prijs per week</h2>
        <p className="tarieven-price-amount">€1300</p>
      </section>

      {/* Info Cards */}
      <section className="tarieven-section">
        <h2 className="tarieven-section-heading">Voorwaarden &amp; contact</h2>
        <div className="tarieven-cards-grid">
          {/* Borg & Betaling */}
          <div className="tarieven-card">
            <h3>Borg &amp; Betaling</h3>
            <p>
              Aanbetaling 20% van de som bij boeken direct te voldoen via Tikkie
              of contant op afspraak. We sturen een betaalverzoek, graag binnen
              1 week betalen.
            </p>
            <p>
              Het volledige bedrag graag overmaken 6 weken voor aankomst + €300
              borg. De borg wordt binnen 5 dagen na vertrek weer teruggestort.
            </p>
          </div>

          {/* Eindschoonmaak */}
          <div className="tarieven-card">
            <h3>Eindschoonmaak</h3>
            <p>
              De eindschoonmaak wordt door de huurder verzorgd. Op verzoek kan
              de verhuurder de eindschoonmaak verzorgen voor €50 extra.
            </p>
          </div>

          {/* Gegevens reizigers */}
          <div className="tarieven-card">
            <h3>Gegevens reizigers</h3>
            <p>
              Graag ontvangen we van alle reizigers hun naam/achternaam,
              geboortedatum en of je een zwemdiploma hebt. Dit moeten we
              doorgeven bij de receptie i.v.m. de verhuurvoorwaarden (we mogen
              maar maximaal 6 weken verhuren).
            </p>
          </div>

          {/* Contact */}
          <div className="tarieven-card">
            <h3>Contact</h3>
            <p>
              Mocht je nog vragen hebben dan kun je ons bereiken op de volgende
              nummers:
            </p>
            <p className="tarieven-contact-item">
              Nikki: <a href="tel:0653308199">0653308199</a>
            </p>
            <p className="tarieven-contact-item">
              Martin: <a href="tel:0651190382">0651190382</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="tarieven-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="tarieven-cta-overlay" />
        <div className="tarieven-cta-inner">
          <h2>Klaar om te boeken?</h2>
          <Link to="/reserveren" className="tarieven-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
