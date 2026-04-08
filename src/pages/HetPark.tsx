import { Link } from "react-router-dom";
import "./HetPark.css";

export default function HetPark() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="park-hero"
        style={{ backgroundImage: "url(/images/hero_3.jpg)" }}
      >
        <div className="park-hero-overlay" />
        <div className="park-hero-content">
          <h1 className="park-hero-heading">Het Park</h1>
          <nav aria-label="Kruimelpad">
            <ol className="park-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="park-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="park-breadcrumb-current" aria-current="page">
                Het Park
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="park-section">
        <div className="park-intro">
          <h2>Capfun De Bongerd</h2>
          <p>
            Capfun de Bongerd met vele voorzieningen en faciliteiten richt zich
            voornamelijk op kinderen tot 11 jaar en hun (groot) ouders. Op
            Capfun de Bongerd bevinden zich naast een zwem-, speelvijver,
            voetbalveld en dierenweide ook diverse speeltuintjes en
            speeltoestellen vlakbij de locaties. Alsof dat nog niet genoeg is,
            kunnen de kinderen zich ook nog uitleven in speelparadijs de Holle
            Bolle Boom waar in het Waterpark een Spetter- en Spatbad,
            Fonteinplein, te gekke glijbanen en openluchtzwembaden zijn te
            vinden.
          </p>
          <p>
            Capfun de Bongerd is gelegen in Tuitjenhorn in het prachtige
            Noord-Holland. Met een topsfeer en persoonlijke service is het ons
            doel om de verwachtingen van onze gasten te overtreffen. Vleghel de
            Egel en buurman Koning Pa-Radijs van de Holle Bolle Boom zorgen er
            samen voor dat u zult genieten van een onvergetelijke vakantie op
            Capfun de Bongerd!
          </p>
          <p className="park-address">
            Adres: Bongerdlaan 3, 1747 CA Tuitjenhorn, Noord Holland.
          </p>
        </div>
      </section>

      {/* 3. Facilities */}
      <section className="park-section">
        <h2 className="park-section-heading">Voorzieningen</h2>
        <p className="park-section-subtext">
          Ontdek alle faciliteiten die het park te bieden heeft.
        </p>
        <div className="park-facilities-grid">
          {/* Zwembaden */}
          <div className="park-facility-card">
            <h3>Zwembaden</h3>
            <ul>
              <li>
                <strong>Binnenzwembad:</strong>
                <ul className="park-sub-list">
                  <li>Peuterbad en glijbanen</li>
                  <li>Normaal zwembad</li>
                  <li>3 grote glijbanen</li>
                  <li>Zit- en eetgelegenheid</li>
                  <li>Doucheruimte</li>
                  <li>Lockers (werken met 50 eurocent)</li>
                </ul>
              </li>
              <li>
                <strong>Buitenzwembad:</strong>
                <ul className="park-sub-list">
                  <li>
                    Waterpark met meerdere glijbanen (o.a. trechterglijbaan)
                  </li>
                  <li>
                    Kinderzwembad met glijbanen, zowel buiten als overdekt
                  </li>
                  <li>Spetter- en spatbad</li>
                  <li>Buitenzwembad</li>
                  <li>
                    Buiten / binnenzwembad welke door een koepel kan worden
                    overdekt bij minder goed weer
                  </li>
                  <li>
                    Ruime ligweiden, ligstoelen en stoelen en tafels met
                    parasols
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Adventure Golf */}
          <div className="park-facility-card">
            <h3>Adventure Golf</h3>
            <ul>
              <li>Mini-golfbaan</li>
              <li>Natuurlijke omgeving</li>
              <li>Vlakbij meerdere speeltuinen</li>
              <li>Kosten: €7,50 per persoon, via de receptie</li>
            </ul>
          </div>

          {/* Pumptrackbaan */}
          <div className="park-facility-card">
            <h3>Pumptrackbaan</h3>
            <ul>
              <li>Grote baan</li>
              <li>Kleine baan</li>
              <li>Steppen, fietsen en skaten</li>
              <li>
                Gebruik op eigen risico, beschermende kleding is aanbevolen
              </li>
              <li>
                BMX of stuntstep is te huren voor €10 per dag via de receptie
              </li>
            </ul>
          </div>

          {/* Fietsverhuur */}
          <div className="park-facility-card">
            <h3>Fietsverhuur</h3>
            <ul>
              <li>Stadsfietsen</li>
              <li>E-bikes</li>
              <li>Bakfietsen</li>
              <li>Kinderfietsen</li>
              <li>BMX</li>
              <li>Stuntstep</li>
              <li>Skelters</li>
              <li>Bolderkar</li>
              <li>Allen te huur via de receptie</li>
            </ul>
            <table className="park-pricing-table">
              <caption>Fietsverhuur prijzen</caption>
              <thead>
                <tr>
                  <th scope="col">Omschrijving</th>
                  <th scope="col">Prijs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unisex Fiets</td>
                  <td>€15,00 per dag</td>
                </tr>
                <tr>
                  <td>E-Bike</td>
                  <td>€32,50 per dag</td>
                </tr>
                <tr>
                  <td>E-bakfiets</td>
                  <td>€47,50 per dag</td>
                </tr>
                <tr>
                  <td>Kinderfiets</td>
                  <td>€10,00</td>
                </tr>
                <tr>
                  <td>Bolderkar</td>
                  <td>€7,50</td>
                </tr>
                <tr>
                  <td>Kinderzitje</td>
                  <td>€3,50</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Jeu de Boulesbaan */}
          <div className="park-facility-card">
            <h3>Jeu de Boulesbaan</h3>
            <ul>
              <li>3 overdekte Jeu de Boules-banen</li>
              <li>Boules zijn verkrijgbaar bij de Parkreceptie</li>
              <li>Voor jong en oud</li>
            </ul>
          </div>

          {/* Restaurants */}
          <div className="park-facility-card">
            <h3>Restaurants</h3>
            <p>Er zijn 4 verschillende eetgelegenheden:</p>
            <ul>
              <li>
                <strong>Restaurant Het Klokhuis:</strong> Sfeervol en lekker
                eten in restaurant het Klokhuis terwijl de kinderen zich
                vermaken in de Holle Bolle Binnen.
              </li>
              <li>
                <strong>Pannenkoekenhuis Wafelien:</strong> Heerlijk smullen in
                het enige echte Pannenkoekenhuis van Wafelien! Lekker zoet! Met
                animatie!
              </li>
              <li>
                <strong>CaraHoedje Pizza:</strong> Bestel ovenheerlijke Pizza's
                bij de CaraHoedje en neem ze mee naar je accommodatie of
                kampeerlocatie.
              </li>
              <li>
                <strong>CaraHoedje Snack:</strong> Bij CaraHoedje Snack vind je
                de lekkerste frietjes, snacks, drankjes en ijsjes.
              </li>
            </ul>
          </div>

          {/* Animatie */}
          <div className="park-facility-card">
            <h3>Animatie</h3>
            <ul>
              <li>Gericht op kinderen 0 t/m 10 jaar</li>
              <li>Sport &amp; spel</li>
              <li>Theater en shows</li>
              <li>Familie-activiteiten</li>
              <li>Knutselen</li>
              <li>
                Schema en inschrijven mogelijk via de Bongerd-app (iPhone en
                Android)
              </li>
            </ul>
          </div>

          {/* Binnenspeeltuin */}
          <div className="park-facility-card">
            <h3>Binnenspeeltuin (Holle Bolle Boom)</h3>
            <ul>
              <li>Overdekt speelplezier</li>
              <li>Weersonafhankelijk</li>
              <li>Lekker bewegen en ontdekken</li>
              <li>Baby/peuter speelhoek</li>
              <li>Klimtoestellen en glijbanen</li>
              <li>Ballenbak</li>
              <li>Arcade machines</li>
              <li>Eet- en drinkgelegenheid</li>
              <li>Diverse stoelen, tafels en banken</li>
            </ul>
          </div>

          {/* Parkshop / Supermarkt */}
          <div className="park-facility-card">
            <h3>Parkshop / Supermarkt</h3>
            <ul>
              <li>Versgebakken broodjes</li>
              <li>Koffie to-go</li>
              <li>Vakantie en kampeer essentials</li>
              <li>Streekproducten</li>
            </ul>
          </div>

          {/* En nog veel meer */}
          <div className="park-facility-card">
            <h3>En nog veel meer</h3>
            <ul>
              <li>Speeleiland</li>
              <li>Speelstrand</li>
              <li>Visvijver</li>
              <li>Speelkasteel</li>
              <li>Op elke hoek een speeltuin</li>
              <li>Tienerlounge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section
        className="park-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="park-cta-overlay" />
        <div className="park-cta-inner">
          <h2>Wil je meer weten over het park?</h2>
          <Link to="/reserveren" className="park-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
