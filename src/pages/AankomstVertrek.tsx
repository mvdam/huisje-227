import { Link } from "react-router-dom";
import "./AankomstVertrek.css";

export default function AankomstVertrek() {
  return (
    <>
      {/* Hero */}
      <section
        className="aankomst-hero"
        style={{ backgroundImage: "url(/images/hero_1.jpg)" }}
      >
        <div className="aankomst-hero-overlay" />
        <div className="aankomst-hero-content">
          <h1 className="aankomst-hero-heading">Aankomst &amp; Vertrek</h1>
          <nav aria-label="Kruimelpad">
            <ol className="aankomst-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="aankomst-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="aankomst-breadcrumb-current" aria-current="page">
                Aankomst &amp; Vertrek
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="aankomst-section">
        <div className="aankomst-intro">
          <p>
            Bijna is het zover; de zomervakantie! Wat leuk dat jullie in ons
            chalet willen verblijven. We zijn al aardig op weg met het opknappen
            van het chalet. Buiten hebben we een nieuw paviljoen en loungeset
            geplaatst. Verder is binnen zo goed als alles gerenoveerd. In dit
            berichtje wat meer informatie over de aankomst en betaling!
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="aankomst-section">
        <h2 className="aankomst-section-heading">Praktische informatie</h2>
        <div className="aankomst-cards-grid">
          {/* Campinggegevens */}
          <div className="aankomst-card">
            <h3>Campinggegevens</h3>
            <ul>
              <li>
                <strong>Adres:</strong> Bongerdlaan 3, 1747 CA Tuitjenhorn
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://bongerd.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bongerd.nl
                </a>
              </li>
              <li>
                <strong>Telefoonnr.:</strong>{" "}
                <a href="tel:0226391481">022-6391481</a>
              </li>
            </ul>
            <p>
              Tip: download ook de app voor de activiteiten en de
              openingstijden! Capfun de Bongerd.
            </p>
          </div>

          {/* Aankomst */}
          <div className="aankomst-card">
            <h3>Aankomst</h3>
            <p>
              Aankomst is op maandag na 12:00. Als we zelf niet bij de aankomst
              aanwezig zijn kan het sleutelkastje aan de schuur geopend worden
              met code 0512.
            </p>
            <p>
              Eén auto kan achter de slagboom geparkeerd worden. Toets de code
              310014 in en druk op ENT. Mocht de slagboom niet open willen dan
              kan je naar de receptie bellen:{" "}
              <a href="tel:0226391481">022-6391481</a>. Geef het chaletnummer
              door en dan wordt er open gedaan. (227)
            </p>
          </div>

          {/* Linnengoed & voorzieningen */}
          <div className="aankomst-card">
            <h3>Linnengoed &amp; voorzieningen</h3>
            <p>
              Bedlinnen en keukenlinnen graag zelf meenemen. Dekbedden en
              kussens zijn aanwezig. Er staat één campingbedje met dik matras.
              Onderlaken graag zelf meenemen.
            </p>
            <p>
              Er is speelgoed aanwezig. Ook kunt u gebruik maken van de
              wasmachine/droger in de schuur. Ons chalet heeft een Nespresso
              koffieapparaat, waterkoker en airfryer. Verder staat er een
              kinderstoel en een peuterstoel.
            </p>
            <p>
              Buiten is een loungebank, tafel met 6 stoelen en een houtskool bbq
              aanwezig (Weber).
            </p>
          </div>

          {/* WiFi */}
          <div className="aankomst-card">
            <h3>WiFi</h3>
            <p>
              Gebruik voor de wifi: <strong>WIFI-227</strong> en wachtwoord:{" "}
              <strong>vakantieopdebongerd</strong>
            </p>
          </div>

          {/* Vertrek */}
          <div className="aankomst-card">
            <h3>Vertrek</h3>
            <p>
              Vertrek op maandag voor 10:00. De eindschoonmaak wordt door de
              huurder verzorgd. Op verzoek kan de verhuurder de eindschoonmaak
              verzorgen voor €50 extra. De sleutel kan achtergelaten worden in
              het sleutelkluisje aan de schuur.
            </p>
          </div>

          {/* Zwembandjes */}
          <div className="aankomst-card">
            <h3>Zwembandjes</h3>
            <p>
              Bandjes voor het zwembad en binnenspeeltuin zijn inbegrepen en
              aanwezig. Een verloren bandje kost €20 en wordt desnoods met de
              borg verrekend. Bij de receptie kan het bandje worden vervangen
              voor ditzelfde bedrag.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="aankomst-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="aankomst-cta-overlay" />
        <div className="aankomst-cta-inner">
          <h2>Wil je reserveren?</h2>
          <Link to="/reserveren" className="aankomst-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
