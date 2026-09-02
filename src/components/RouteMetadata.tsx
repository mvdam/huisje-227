import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_METADATA = {
  title: "Capfun De Bongerd 227",
  description:
    "Vakantiehuis op Capfun De Bongerd in Tuitjenhorn, Noord-Holland.",
};

const ROUTE_METADATA: Record<string, typeof DEFAULT_METADATA> = {
  "/": {
    title: "Capfun De Bongerd 227 | Vakantiehuis in Tuitjenhorn",
    description:
      "Ontdek vakantiehuis 227 op Capfun De Bongerd: een comfortabel huisje met zonnige tuin en volop voorzieningen voor gezinnen.",
  },
  "/het-huisje": {
    title: "Het huisje | Capfun De Bongerd 227",
    description:
      "Bekijk de slaapkamers, woonkamer, keuken, tuin en voorzieningen van vakantiehuis 227 op Capfun De Bongerd.",
  },
  "/aankomst-vertrek": {
    title: "Aankomst & vertrek | Capfun De Bongerd 227",
    description:
      "Praktische informatie over aankomst, vertrek, linnengoed, wifi en voorzieningen bij vakantiehuis 227.",
  },
  "/tarieven": {
    title: "Tarieven & voorwaarden | Capfun De Bongerd 227",
    description:
      "Lees de prijs, borg, betaalvoorwaarden en verhuurvoorwaarden van vakantiehuis 227 op Capfun De Bongerd.",
  },
  "/het-park": {
    title: "Het park | Capfun De Bongerd 227",
    description:
      "Ontdek de zwembaden, speeltuinen, restaurants en andere voorzieningen van vakantiepark Capfun De Bongerd.",
  },
  "/contact": {
    title: "Contact | Capfun De Bongerd 227",
    description:
      "Neem contact op over vakantiehuis 227 op Capfun De Bongerd in Tuitjenhorn.",
  },
  "/reserveren": {
    title: "Reserveren | Capfun De Bongerd 227",
    description:
      "Bekijk de beschikbaarheid en contactmogelijkheden voor vakantiehuis 227 op Capfun De Bongerd.",
  },
};

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[pathname] ?? {
      title: "Pagina niet gevonden | Capfun De Bongerd 227",
      description: DEFAULT_METADATA.description,
    };
    document.title = metadata.title;
    setMeta("description", metadata.description);
    setMeta("author", "Capfun De Bongerd 227");
  }, [pathname]);

  return null;
}
