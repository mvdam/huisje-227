import {
  useState,
  useEffect,
  useRef,
  useCallback,
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const SLIDER_IMAGES = Array.from(
  { length: 33 },
  (_, i) => `/images/slider/slider-${i + 1}.jpeg`,
);

const SLIDER_ALT_TEXTS = [
  "Tuin van het vakantiehuis met terras en grasveld",
  "Terras en overdekte loungehoek bij het vakantiehuis",
  "Loungebank en vuurtafel onder de partytent",
  "Woonkamer met hoekbank en openslaande tuindeuren",
  "Lichte woon- en eetkamer van het vakantiehuis",
  "Keuken van het vakantiehuis",
  "Slaapkamer met stapelbed",
  "Tweede slaapkamer van het vakantiehuis",
  "Slaapkamer met tweepersoons boxspring",
  "Badkamer met douche en toilet",
  "Schuur met koelkast, wasmachine en droger",
  "Entree van vakantiepark Capfun De Bongerd",
  "Restaurantgebouw op Capfun De Bongerd",
  "Entree van speelparadijs Holle Bolle Boom",
  "Entree van het buitenwaterpark",
  "Buitenzwembad met overkapping en ligweide",
  "Ondiep kinderbad onder een rieten parasol",
  "Waterspeeltuin met glijbanen",
  "Parkmascotte bij de waterglijbaan",
  "Piraten-speeltuin op de ligweide",
  "Speelkasteel met glijbanen",
  "Pumptrackbaan op het vakantiepark",
  "Speelvijver en groene ligweide",
  "Balie van de parkshop",
  "Luchtfoto van het waterpark en vakantiepark",
  "Klimtoestel in de binnenspeeltuin",
  "Speelgedeelte voor jonge kinderen in de binnenspeeltuin",
  "Speelvijver met boomvormige glijbaan",
  "Avondvoorstelling met verlichte parkfiguren",
  "Podium van het animatietheater",
  "Glijbanen in het binnenzwembad",
  "Waterspeeltoestel in het binnenzwembad",
  "Parkmascotte aan tafel tijdens kinderanimatie",
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);
    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function isolatePageBackground() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".site-header, .site-footer, #main-content > :not(.home-lightbox-overlay)",
    ),
  );
  const previous = elements.map((element) => ({
    element,
    ariaHidden: element.getAttribute("aria-hidden"),
    inert: element.hasAttribute("inert"),
  }));
  elements.forEach((element) => {
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("inert", "");
  });

  return () => {
    previous.forEach(({ element, ariaHidden, inert }) => {
      if (ariaHidden === null) element.removeAttribute("aria-hidden");
      else element.setAttribute("aria-hidden", ariaHidden);
      if (!inert) element.removeAttribute("inert");
    });
  };
}

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const restoreBackground = isolatePageBackground();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "Tab") {
        const focusable =
          closeRef.current?.parentElement?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])',
          );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreBackground();
    };
  }, [onClose]);

  return (
    <div
      className="home-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-dialog-title"
    >
      <h2 id="video-dialog-title" className="sr-only">
        Video van vakantiehuis Capfun De Bongerd 227
      </h2>
      <button
        ref={closeRef}
        className="home-lightbox-close"
        onClick={onClose}
        aria-label="Sluiten"
      >
        &times;
      </button>
      <video
        src={src}
        controls
        autoPlay
        className="home-video-player"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ImageLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Tab") {
        const focusable =
          closeRef.current?.parentElement?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const restoreBackground = isolatePageBackground();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreBackground();
    };
  }, [handleKeyDown]);

  return (
    <div
      className="home-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-dialog-title"
    >
      <h2 id="gallery-dialog-title" className="sr-only">
        Fotogalerij van het vakantiehuis en park
      </h2>
      <button
        ref={closeRef}
        className="home-lightbox-close"
        onClick={onClose}
        aria-label="Sluiten"
      >
        &times;
      </button>
      <button
        className="home-lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Vorige"
      >
        &#8249;
      </button>
      <img
        src={images[index]}
        alt={SLIDER_ALT_TEXTS[index]}
        className="home-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="home-lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Volgende"
      >
        &#8250;
      </button>
    </div>
  );
}

const TAB_HUISJE_LEFT = [
  {
    title: "Woonkamer",
    items: [
      "Hoekbank",
      "Eethoek met 4 stoelen",
      "Kinderstoel & Peuterstoel",
      "Televisie met Chromecast",
      "Speelgoed (0-10 jaar)",
      "Airco (koelen + verwarmen)",
    ],
  },
  {
    title: "Keuken",
    items: [
      "Nespresso koffieapparaat",
      "Waterkoker",
      "XL Airfryer",
      "4-pits Gaskookplaat",
      "Koelkast (zonder vriesvak)",
      "Volledig servies voor 6-8 personen",
    ],
  },
  {
    title: "Slaapkamer 1",
    items: [
      "Boxspring (200x140 cm)",
      "Kussens en dekbed aanwezig",
      "2 grote kledingkasten",
      "Ventilator",
      "Televisie",
    ],
  },
];

const TAB_HUISJE_RIGHT = [
  {
    title: "Slaapkamer 2",
    items: [
      "Stapelbed (200x60 cm)",
      "Kussens en dekbedden aanwezig",
      "Campingbedje + dik matras + dekbed",
      "Ruime ladekast",
    ],
  },
  { title: "Badkamer", items: ["Douche", "Toilet", "Spoelbak", "Spiegelkast"] },
  {
    title: "Tuin & Schuur",
    items: [
      "Koelkast met vriesvak",
      "Wasmachine & Droger",
      "Droogrek / Bolderkar",
      "Diverse fietsen en steppen / Divers speelgoed",
      "Weber houtskool BBQ / Vuurkorf",
      "Luxe partytent met loungehoek en heater",
      "Ruimte eettafel met 6 stoelen (+2)",
      "Grasveldje met ruimte voor een tent",
    ],
  },
];

const TAB_PARK_LEFT = [
  {
    title: "Waterpark (buiten)",
    items: [
      "4 glijbanen waarvan één met trechter",
      "2 buitenbaden waarvan één overdekt bij slecht/koud weer",
      "2 kinderzwembaden waarvan één overdekt bij slecht/koud weer",
      "Ruimte ligweide met ligbedden en stoelen en tafels",
      "Omkleedhokjes en toiletten",
      "Snackbar",
    ],
  },
  {
    title: "Waterparadijs (binnen)",
    items: [
      "4 glijbanen",
      "Groot baby/peuterbad",
      "Binnenzwembad",
      "Stoelen en tafels",
      "Omkleedhokjes en toiletten",
      "Snackbar",
    ],
  },
  {
    title: "Binnenspeeltuin",
    items: [
      "Diverse glijbanen waarvan één hele steile voor de echte durfals!",
      "Speeltoestellen voor kids van 0 t/m 11 jaar",
      "Stoelen en tafels",
      "Snackbar",
    ],
  },
  {
    title: "Speeleiland en strand",
    items: [
      "Groot klimtoestel op het eiland",
      "Trekpont",
      "Stapstenen",
      "Zandstrand met parasols",
    ],
  },
];

const TAB_PARK_RIGHT = [
  {
    title: "Pumptrack",
    items: [
      "Voor BMX, mountainbike, stuntstep, skates of skateboard",
      "Kleine baan beschikbaar voor de kleintjes",
      "Fietsen te huur vanaf €10,00",
    ],
  },
  {
    title: "Minigolf",
    items: ["Tegen betaling van €7,50 p.p.", "Adventure Golf met 18 holes"],
  },
  {
    title: "Jeu de Boules",
    items: [
      "3 overdekte banen",
      "Boules verkrijgbaar bij de receptie",
      "Voor jong en oud",
    ],
  },
  {
    title: "Fietsverhuur",
    items: [
      "Stadsfietsen",
      "E-bikes",
      "Bakfietsen",
      "Kinderfietsen",
      "BMX/Stuntstep",
      "Skelters",
      "Bolderkar",
      "Huur via de receptie",
    ],
  },
  {
    title: "Animatie",
    items: [
      "Gericht op kinderen 0 t/m 10 jaar",
      "Sport & spel",
      "Theater en shows",
      "Familie-activiteiten",
      "Knutselen",
      "Schema via de Bongerd-app",
    ],
  },
  {
    title: "Supermarkt",
    items: [
      "Verse broodjes",
      "Snacks / lunch / diner / lokale producten",
      "Koffie to-go",
      "Campingbenodigdheden",
    ],
  },
  {
    title: "Snackbar & Pizzeria",
    items: [
      "CaraHoedje Snack",
      "CaraHoedje Pizza",
      "(Soft) ijs",
      "Zitgelegenheid binnen en buiten",
      "Sportcafé voor voetbal of F1",
    ],
  },
  {
    title: "Restaurants",
    items: [
      "Pannenkoekenhuis Wafelien (incl. animatie)",
      "Restaurant/Café Het Klokhuis",
      "Reserveren via de receptie",
    ],
  },
  {
    title: "En nog veel meer!",
    items: [
      "Speeleiland",
      "Speelstrand",
      "Visvijver",
      "Speelkasteel",
      "Op elke hoek een speeltuin",
      "Tienerlounge",
    ],
  },
];

const TAB_OMGEVING_LEFT: {
  title: string;
  items?: string[];
  text?: string;
  heading?: boolean;
}[] = [
  {
    title: "Ontdekken",
    heading: true,
    items: [
      "Vlindorado in Waarland",
      "Museum Broekerveiling in Broek op Langedijk",
      "Land van Fluwel in Sint Maartenzee",
      "Zeeaquarium in Bergen aan Zee",
      "Van Blanckendaell Park in Tuitjenhorn",
      "Tuinderij de Marlequi in Warmenhuizen",
      "Sprookjeswonderland in Enkhuizen",
      "Dierenpark Hoenderdaell in Anna Paulowna",
    ],
  },
  {
    title: "Het strand",
    text: "Op zo'n 10 minuten rijden met de auto ligt Schoorl met haar prachtige duinen en bossen. Ook kunnen wij Hargen aan Zee aanraden voor een rustiger strand. Ook hier kun je prachtig wandelen of fietsen in het duingebied.",
  },
  {
    title: "Alkmaar",
    text: "Bezoek de Kaasmarkt (elke zaterdag in apr t/m sept) of verken het prachtige historische centrum.",
  },
  {
    title: "Dierenpark Hoenderdaell",
    text: "Wildpark met een habitat voor de opvang van grote katachtigen, een maki-eiland en roofvogeldemonstraties.",
  },
];

const TAB_OMGEVING_RIGHT: {
  title: string;
  items?: string[];
  text?: string;
  heading?: boolean;
}[] = [
  {
    title: "Actieve uitjes",
    heading: true,
    items: [
      "SKEEF waterskiën in Heerhugowaard",
      "Urban Trickz in Schagen",
      "Wandelen/fietsen in (de duinen van) Schoorl of Petten",
      "SkagaVenture in Schagen",
    ],
  },
  {
    title: "Gezellig",
    heading: true,
    items: [
      "Bioscoop in Schagen, Alkmaar of Heerhugowaard",
      "Overdekt winkelen in Schagen of Heerhugowaard",
      "Winkelen in steden als Alkmaar, Hoorn of Schagen",
      "Kaasmarkt in Alkmaar",
      "Strandwandeling in Petten",
    ],
  },
  {
    title: "Schagen",
    text: "Voor leuke terrasjes kun je terecht in Schagen! Ook is hier iedere donderdag de weekmarkt. Altijd leuk om even een kijkje te nemen.",
  },
  {
    title: "Museum Broekerveiling",
    text: "Lokaal geschiedenismuseum met tentoonstellingen, een 19e-eeuws veilinghuis aan water, rondvaarten en een café.",
  },
];

function TabColumn({
  data,
}: {
  data: { title: string; items?: string[]; text?: string; heading?: boolean }[];
}) {
  return (
    <div className="home-tab-column">
      {data.map((section) => (
        <div key={section.title}>
          {section.heading ? (
            <h4>
              <span className="home-tab-category-heading">{section.title}</span>
            </h4>
          ) : (
            <h4>{section.title}</h4>
          )}
          {section.items ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const HIGHLIGHT_CARDS = [
  {
    img: "/images/img_1.jpg",
    title: "Ruime zonnige tuin",
    sub: "Loungen & BBQ",
  },
  {
    img: "/images/img_2.jpg",
    title: "Comfortabele woonkamer",
    sub: "Heerlijk relaxen",
  },
  {
    img: "/images/img_3.jpg",
    title: "Ruime keuken",
    sub: "Van alle gemakken voorzien",
  },
];

const ACTIVITY_CARDS = [
  {
    img: "/images/slider/slider-17.jpeg",
    title: "Zwemmen",
    desc: "Leef je helemaal uit in het binnenzwembad met groot peuterbad en diverse glijbanen. Of ga je van de trechterglijbaan in het (buiten) Waterpark?",
  },
  {
    img: "/images/slider/slider-21.jpeg",
    title: "Spelen",
    desc: "Lekker klimmmen en klauteren in het Kasteel? Of is de pumptrack meer jouw ding? Of het speel/klimeiland? Of heb je meer zin in midgetgolf? Het kan allemaal!",
  },
  {
    img: "/images/slider/slider-33.jpeg",
    title: "Eten",
    desc: "Lekker pannenkoeken eten in Pannenkoekenhuis Wafelien? Of kies je voor Cafe/Restaurant het Klokhuis? En anders kun je altijd terecht bij de snackbar of de pizzeria. Voor elk wat wils!",
  },
];

const TABS = [
  { id: "huisje" as const, label: "Het huisje" },
  { id: "park" as const, label: "Het park" },
  { id: "omgeving" as const, label: "De omgeving" },
];

export default function Home() {
  const navigate = useNavigate();
  const [aankomst, setAankomst] = useState("");
  const [vertrek, setVertrek] = useState("");
  const [volwassenen, setVolwassenen] = useState("2");
  const [kinderen, setKinderen] = useState("0");
  const [baby, setBaby] = useState("0");
  const [activeTab, setActiveTab] = useState<"huisje" | "park" | "omgeving">(
    "huisje",
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionBehavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryPaused = useRef(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const galleryTriggerRef = useRef<Element | null>(null);
  const videoTriggerRef = useRef<Element | null>(null);

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

  const handleTabKeyDown = (
    e: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let newIndex: number | null = null;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % TABS.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + TABS.length) % TABS.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = TABS.length - 1;
    }
    if (newIndex !== null) {
      e.preventDefault();
      setActiveTab(TABS[newIndex].id);
      tabRefs.current[newIndex]?.focus();
    }
  };

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setHeroOffset(0);
      return;
    }

    let animationFrame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setHeroOffset(Math.min(window.scrollY * 0.5, 240));
      });
    };
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateParallax);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el || prefersReducedMotion) return;
    const id = setInterval(() => {
      if (galleryPaused.current) return;
      const item = el.querySelector(".home-gallery-item") as HTMLElement | null;
      if (!item) return;
      const scrollAmount = item.offsetWidth + 16;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: motionBehavior });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: motionBehavior });
      }
    }, 3500);
    return () => clearInterval(id);
  }, [motionBehavior, prefersReducedMotion]);

  const handleScroll = () => {
    document.getElementById("next")?.scrollIntoView({
      behavior: motionBehavior,
    });
  };

  return (
    <>
      {/* 1. Hero */}
      <section
        className="home-hero"
        style={{
          backgroundImage: "url(/images/hero_4.jpg)",
          backgroundPosition: `center calc(50% + ${heroOffset}px)`,
        }}
      >
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="home-hero-tagline">Vakantie begint hier!</p>
          <h1 className="home-hero-heading">Capfun De Bongerd</h1>
        </div>
        <button
          className="home-scroll-indicator"
          onClick={handleScroll}
          aria-label="Scroll naar beneden"
        >
          &#8964;
        </button>
      </section>

      {/* 2. Availability */}
      <section className="home-availability" id="next">
        <form className="home-availability-form" onSubmit={handleAvailability}>
          <div className="home-availability-field">
            <label htmlFor="aankomst">Aankomst</label>
            <input
              type="date"
              id="aankomst"
              value={aankomst}
              onChange={(e) => setAankomst(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>
          <div className="home-availability-field">
            <label htmlFor="vertrek">Vertrek</label>
            <input
              type="date"
              id="vertrek"
              value={vertrek}
              onChange={(e) => setVertrek(e.target.value)}
              min={aankomst || new Date().toISOString().split("T")[0]}
              required
            />
          </div>
          <div className="home-availability-field">
            <label htmlFor="volwassenen">Volwassenen</label>
            <select
              id="volwassenen"
              value={volwassenen}
              onChange={(e) => setVolwassenen(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="home-availability-field">
            <label htmlFor="kinderen">Kinderen</label>
            <select
              id="kinderen"
              value={kinderen}
              onChange={(e) => setKinderen(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="home-availability-field">
            <label htmlFor="baby">Baby</label>
            <select
              id="baby"
              value={baby}
              onChange={(e) => setBaby(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
          <button type="submit" className="home-availability-btn">
            Bekijk beschikbaarheid
          </button>
        </form>
      </section>

      {/* 3. Welcome */}
      <section className="home-section" data-reveal>
        <div className="home-welcome">
          <div className="home-welcome-text">
            <h2>Welkom!</h2>
            <p>
              Genieten begint hier! Ontdek ons kleine paradijs in Noord-Holland
              op 5-sterrencamping Capfun De Bongerd.
            </p>
            <div className="home-welcome-actions">
              <Link to="/het-huisje" className="home-btn-primary">
                Lees meer
              </Link>
              <button
                type="button"
                className="home-video-link"
                onClick={(event) => {
                  videoTriggerRef.current = event.currentTarget;
                  setVideoOpen(true);
                }}
              >
                &#9654; Bekijk de video
              </button>
            </div>
          </div>
          <div className="home-welcome-images">
            <img
              src="/images/img_1.jpg"
              alt="Vakantiehuis op Capfun De Bongerd"
              className="home-welcome-img-main"
            />
            <img
              src="/images/food-1.jpg"
              alt="Barbecue in de tuin"
              className="home-welcome-img-accent"
            />
          </div>
        </div>
      </section>

      {/* 4. Property Highlights */}
      <section className="home-section" data-reveal>
        <h2 className="home-section-heading">Genieten</h2>
        <p className="home-section-subtext">
          Een lekker ruime tuin, knusse en comfortabele woonkamer en twee
          slaapkamers voor jou en de kids! Alles om te kunnen genieten is
          aanwezig.
        </p>
        <div className="home-highlights-grid">
          {HIGHLIGHT_CARDS.map((card) => (
            <div className="home-highlight-card" key={card.title}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Photo Gallery */}
      <section className="home-section" data-reveal>
        <h2 className="home-section-heading">Foto's</h2>
        <p className="home-section-subtext">
          Proef de sfeer van ons huisje en het park!
        </p>
        <div className="home-gallery-wrapper">
          <button
            type="button"
            className="home-gallery-nav home-gallery-nav--prev"
            onClick={() => {
              const el = galleryRef.current;
              if (!el) return;
              const item = el.querySelector(
                ".home-gallery-item",
              ) as HTMLElement | null;
              if (!item) return;
              el.scrollBy({
                left: -(item.offsetWidth + 16),
                behavior: motionBehavior,
              });
            }}
            aria-label="Vorige foto's"
          >
            &#8249;
          </button>
          <div
            className="home-gallery-track"
            ref={galleryRef}
            onMouseEnter={() => {
              galleryPaused.current = true;
            }}
            onMouseLeave={() => {
              galleryPaused.current = false;
            }}
            onFocus={() => {
              galleryPaused.current = true;
            }}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget as Node | null)
              ) {
                galleryPaused.current = false;
              }
            }}
          >
            {SLIDER_IMAGES.map((src, i) => (
              <div
                className="home-gallery-item"
                key={i}
                onClick={(event) => {
                  galleryTriggerRef.current = event.currentTarget;
                  setLightboxIndex(i);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    galleryTriggerRef.current = e.currentTarget;
                    setLightboxIndex(i);
                  } else if (e.key === "ArrowRight") {
                    e.preventDefault();
                    const next = (e.currentTarget as HTMLElement)
                      .nextElementSibling as HTMLElement | null;
                    if (next) {
                      next.focus();
                      next.scrollIntoView({
                        behavior: motionBehavior,
                        block: "nearest",
                        inline: "center",
                      });
                    }
                  } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prev = (e.currentTarget as HTMLElement)
                      .previousElementSibling as HTMLElement | null;
                    if (prev) {
                      prev.focus();
                      prev.scrollIntoView({
                        behavior: motionBehavior,
                        block: "nearest",
                        inline: "center",
                      });
                    }
                  }
                }}
              >
                <img
                  src={src}
                  alt={SLIDER_ALT_TEXTS[i]}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="home-gallery-nav home-gallery-nav--next"
            onClick={() => {
              const el = galleryRef.current;
              if (!el) return;
              const item = el.querySelector(
                ".home-gallery-item",
              ) as HTMLElement | null;
              if (!item) return;
              el.scrollBy({
                left: item.offsetWidth + 16,
                behavior: motionBehavior,
              });
            }}
            aria-label="Volgende foto's"
          >
            &#8250;
          </button>
        </div>
      </section>

      {videoOpen && (
        <VideoLightbox
          src="/images/bongerd.mp4"
          onClose={() => {
            const trigger = videoTriggerRef.current as HTMLElement | null;
            setVideoOpen(false);
            window.setTimeout(() => trigger?.focus(), 0);
          }}
        />
      )}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={SLIDER_IMAGES}
          index={lightboxIndex}
          onClose={() => {
            const trigger = galleryTriggerRef.current as HTMLElement | null;
            setLightboxIndex(null);
            window.setTimeout(() => trigger?.focus(), 0);
          }}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length,
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % SLIDER_IMAGES.length)
          }
        />
      )}

      {/* 6. Amenities */}
      <section
        className="home-amenities"
        data-reveal
        style={{ backgroundImage: "url(/images/hero_3.jpg)" }}
      >
        <div className="home-amenities-overlay" />
        <div className="home-amenities-inner">
          <h2 className="home-section-heading">Alle voorzieningen</h2>
          <p className="home-section-subtext">
            Lees hieronder meer over waar je allemaal van kunt genieten. In ons
            huisje, op het park en in de omgeving.
          </p>
          <div className="home-tabs" role="tablist">
            {TABS.map((tab, index) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`home-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {activeTab === "huisje" && (
            <div
              className="home-tab-content"
              role="tabpanel"
              id="tabpanel-huisje"
              aria-labelledby="tab-huisje"
            >
              <TabColumn data={TAB_HUISJE_LEFT} />
              <div className="home-tab-column">
                <TabColumn data={TAB_HUISJE_RIGHT} />
                <div>
                  <h4>En nog meer!</h4>
                  <p>
                    Als huurder kun je gebruik maken van alle faciliteiten op de
                    camping. Zoals de zwembaden, binnenspeeltuin, animatie,
                    pumptrack en nog veel meer! Je gebruikt hiervoor de
                    armbandjes die aanwezig zijn in het huisje.
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "park" && (
            <div
              className="home-tab-content"
              role="tabpanel"
              id="tabpanel-park"
              aria-labelledby="tab-park"
            >
              <TabColumn data={TAB_PARK_LEFT} />
              <TabColumn data={TAB_PARK_RIGHT} />
            </div>
          )}
          {activeTab === "omgeving" && (
            <div
              className="home-tab-content"
              role="tabpanel"
              id="tabpanel-omgeving"
              aria-labelledby="tab-omgeving"
            >
              <TabColumn data={TAB_OMGEVING_LEFT} />
              <TabColumn data={TAB_OMGEVING_RIGHT} />
            </div>
          )}
        </div>
      </section>

      {/* 7. Reviews */}
      <section className="home-section" data-reveal>
        <h2 className="home-section-heading" style={{ textAlign: "center" }}>
          Recensies
        </h2>
        <div className="home-review">
          <blockquote>
            "Echt een tophuisje! Wij hebben het mega naar ons zin gehad.
            Heerlijk om te zwemmen, vooral voor de kleintjes!"
          </blockquote>
          <cite>Fam. Eshuis</cite>
        </div>
      </section>

      {/* 8. Park Activities */}
      <section className="home-section" data-reveal>
        <h2 className="home-section-heading">Op het park</h2>
        <p className="home-section-subtext">
          Op Capfun de Bongerd is van alles te beleven. Naast een zwem-,
          speelvijver, voetbalveld en dierenweide zijn er ook diverse
          speeltuintjes en speeltoestellen vlak bij ons huisje. Alsof dat nog
          niet genoeg is, kunnen de kids zich helemaal uitleven in de
          binnenspeeltuin de Holle Bolle Boom waar in het Waterpark een Spetter-
          en Spatbad, Fonteinplein, te gekke glijbanen en openluchtzwembaden
          zijn te vinden.
        </p>
        <div className="home-activities-grid">
          {ACTIVITY_CARDS.map((card) => (
            <div className="home-activity-card" key={card.title}>
              <img src={card.img} alt={`${card.title} op Capfun De Bongerd`} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section
        className="home-cta"
        data-reveal
        style={{ backgroundImage: "url(/images/hero_4.jpg)" }}
      >
        <div className="home-cta-overlay" />
        <div className="home-cta-inner">
          <h2>Wil je ook van ons huisje gebruik maken?</h2>
          <Link to="/reserveren" className="home-btn-primary">
            Reserveer nu!
          </Link>
        </div>
      </section>
    </>
  );
}
