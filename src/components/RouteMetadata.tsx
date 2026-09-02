import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "../config/site";

const DEFAULT_METADATA = {
  title: SITE_NAME,
  description:
    "Vakantiehuis op Capfun De Bongerd in Tuitjenhorn, Noord-Holland.",
};

const ROUTE_METADATA: Record<string, typeof DEFAULT_METADATA> = {
  "/": {
    title: `${SITE_NAME} | Vakantiehuis in Tuitjenhorn`,
    description:
      "Ontdek vakantiehuis 227 op Capfun De Bongerd: een comfortabel huisje met zonnige tuin en volop voorzieningen voor gezinnen.",
  },
  "/het-huisje": {
    title: `Het huisje | ${SITE_NAME}`,
    description:
      "Bekijk de slaapkamers, woonkamer, keuken, tuin en voorzieningen van vakantiehuis 227 op Capfun De Bongerd.",
  },
  "/aankomst-vertrek": {
    title: `Aankomst & vertrek | ${SITE_NAME}`,
    description:
      "Praktische informatie over aankomst, vertrek, linnengoed, wifi en voorzieningen bij vakantiehuis 227.",
  },
  "/tarieven": {
    title: `Tarieven & voorwaarden | ${SITE_NAME}`,
    description:
      "Lees de prijs, borg, betaalvoorwaarden en verhuurvoorwaarden van vakantiehuis 227 op Capfun De Bongerd.",
  },
  "/het-park": {
    title: `Het park | ${SITE_NAME}`,
    description:
      "Ontdek de zwembaden, speeltuinen, restaurants en andere voorzieningen van vakantiepark Capfun De Bongerd.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Neem contact op over vakantiehuis 227 op Capfun De Bongerd in Tuitjenhorn.",
  },
  "/reserveren": {
    title: `Reserveren | ${SITE_NAME}`,
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

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[pathname] ?? {
      title: `Pagina niet gevonden | ${SITE_NAME}`,
      description: DEFAULT_METADATA.description,
    };
    document.title = metadata.title;
    setMeta("description", metadata.description);
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    setMeta("author", SITE_AUTHOR);
    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta("og:title", metadata.title);
    setPropertyMeta("og:description", metadata.description);
    setPropertyMeta("og:url", canonicalUrl);
    setCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}
