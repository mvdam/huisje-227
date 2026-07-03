import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HetHuisje.css";

const FACILITIES = [
  {
    title: "Woonkamer",
    items: [
      "Hoekbank",
      "Eettafel met 4 stoelen en één peuterstoel en één kinderstoel",
      "Kast met spelletjes en speelgoed (o.a. Duplo)",
      "Smart TV met Chromecast (Netflix, Videoland, Youtube, etc etc)",
      "Airco voor verwarming en koeling",
      "Veel lichtinval",
      "Openslaande deuren",
    ],
  },
  {
    title: "Keuken",
    items: [
      "Koelkast (zonder vriesvak)",
      "4-pits gaskookplaat",
      "Nespresso koffieapparaat",
      "Waterkoker",
      "XL Airfryer",
      "Stopcontacten met USB",
      "Pannen",
      "Volledig servies voor 6-8 personen",
    ],
  },
  {
    title: "Slaapkamer 1",
    items: [
      "2-persoons boxspring (200x140cm)",
      "Kussens",
      "Dekbed",
      "Kledingkast, 2x hanggedeelte, diversen planken",
      "Televisie met Chromecast",
      "Ventilator",
    ],
  },
  {
    title: "Slaapkamer 2",
    items: [
      "Stapelbed (200x60cm)",
      "Campingbedje met matras en dekbed",
      "Ladekast met 3 laden",
      "Kussens",
      "Dekbedden",
    ],
  },
  {
    title: "Badkamer",
    items: ["Toilet", "Douche", "Spoelbak", "Spiegelkast"],
  },
];

const SCHUUR = {
  title: "Schuur",
  items: [
    "Wasmachine",
    "Droger",
    "Droogrek",
    "Bolderkar",
    "Koelkast met vriesvak",
    "Buitenspeelgoed",
    "Diverse fietsen en steppen",
    "Extra stoelen",
    "Tuingereedschap",
  ],
};

const TUIN = {
  title: "Tuin",
  items: [
    {
      text: "Luxe partytent met",
      sub: ["Loungebank", "Heater", "Verlichting", "Wind- en regenbestendig"],
    },
    { text: "Eettafel met 6 stoelen" },
    { text: "Parasol" },
    { text: "Tuinhaard / vuurkorf" },
    { text: "Kogel BBQ met kolenstarter en BBQ-tang" },
    {
      text: "Grasveldje met mogelijkheid tot opzetten tent (+/- 5x4m)",
    },
  ],
};

export default function HetHuisje() {
  const navigate = useNavigate();
  const [aankomst, setAankomst] = useState("");
  const [vertrek, setVertrek] = useState("");
  const [volwassenen, setVolwassenen] = useState("2");
  const [kinderen, setKinderen] = useState("2");
  const [baby, setBaby] = useState("0");

  const handleAvailability = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      aankomst,
      vertrek,
      volwassenen,
      kinderen,
      baby,
    });
    navigate(`/reserveren?${params.toString()}`);
  };

  return (
    <>
      {/* 1. Hero */}
      <section
        className="huisje-hero"
        style={{ backgroundImage: "url(/images/hero_2.jpg)" }}
      >
        <div className="huisje-hero-overlay" />
        <div className="huisje-hero-content">
          <h1 className="huisje-hero-heading">Het huisje</h1>
          <nav aria-label="Kruimelpad">
            <ol className="huisje-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="huisje-breadcrumb-separator" aria-hidden="true">
                &gt;
              </li>
              <li className="huisje-breadcrumb-current" aria-current="page">
                Het huisje
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 2. Availability */}
      <section className="huisje-availability">
        <form
          className="huisje-availability-form"
          onSubmit={handleAvailability}
        >
          <div className="huisje-availability-field">
            <label htmlFor="h-aankomst">Aankomst</label>
            <input
              type="date"
              id="h-aankomst"
              value={aankomst}
              onChange={(e) => setAankomst(e.target.value)}
              required
            />
          </div>
          <div className="huisje-availability-field">
            <label htmlFor="h-vertrek">Vertrek</label>
            <input
              type="date"
              id="h-vertrek"
              value={vertrek}
              onChange={(e) => setVertrek(e.target.value)}
              required
            />
          </div>
          <div className="huisje-availability-field">
            <label htmlFor="h-volwassenen">Volwassenen</label>
            <select
              id="h-volwassenen"
              value={volwassenen}
              onChange={(e) => setVolwassenen(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="huisje-availability-field">
            <label htmlFor="h-kinderen">Kinderen</label>
            <select
              id="h-kinderen"
              value={kinderen}
              onChange={(e) => setKinderen(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="huisje-availability-field">
            <label htmlFor="h-baby">Baby</label>
            <select
              id="h-baby"
              value={baby}
              onChange={(e) => setBaby(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
          <button type="submit" className="huisje-availability-btn">
            Bekijk beschikbaarheid
          </button>
        </form>
      </section>

      {/* 3. Introduction */}
      <section className="huisje-section">
        <div className="huisje-intro">
          <div className="huisje-intro-text">
            <h2>Ons vakantiehuis</h2>
            <p>
              Ons gezellige vakantiehuis op Capfun De Bongerd biedt alles wat je
              nodig hebt voor een ontspannen vakantie. Twee slaapkamers, een
              volledig uitgeruste keuken, een comfortabele woonkamer en een
              heerlijke tuin met loungehoek en BBQ.
            </p>
          </div>
          <div className="huisje-intro-image">
            <img
              src="/images/img_1.jpg"
              alt="Vakantiehuis op Capfun De Bongerd"
            />
          </div>
        </div>
      </section>

      {/* 4. Facilities */}
      <section className="huisje-section">
        <h2 className="huisje-section-heading">Voorzieningen</h2>
        <p className="huisje-section-subtext">
          Van een volledig uitgeruste keuken tot een comfortabele woonkamer —
          ontdek wat ons huisje allemaal te bieden heeft.
        </p>
        <div className="huisje-facilities-grid">
          {FACILITIES.map((facility) => (
            <div className="huisje-facility-card" key={facility.title}>
              <h3>{facility.title}</h3>
              <ul>
                {facility.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Schuur */}
          <div className="huisje-facility-card">
            <h3>{SCHUUR.title}</h3>
            <ul>
              {SCHUUR.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tuin */}
          <div className="huisje-facility-card">
            <h3>{TUIN.title}</h3>
            <ul>
              {TUIN.items.map((item) => (
                <li key={item.text}>
                  {item.text}
                  {item.sub && (
                    <ul className="huisje-sub-list">
                      {item.sub.map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section
        className="huisje-cta"
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="huisje-cta-overlay" />
        <div className="huisje-cta-inner">
          <h2>Wil je ook van ons huisje gebruik maken?</h2>
          <Link to="/reserveren" className="huisje-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
