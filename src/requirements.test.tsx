import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AankomstVertrek from "./pages/AankomstVertrek";
import Contact from "./pages/Contact";
import HetHuisje from "./pages/HetHuisje";
import HetPark from "./pages/HetPark";
import Home from "./pages/Home";
import Reserveren from "./pages/Reserveren";
import Tarieven from "./pages/Tarieven";

function renderRoute(component: React.ReactElement) {
  return render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {component}
    </MemoryRouter>,
  );
}

test("homepage bevat de afgevinkte kerninhoud en 33 beschrijvende galerijbeelden", () => {
  renderRoute(<Home />);

  expect(
    screen.getByRole("heading", { name: "Capfun De Bongerd" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Vakantie begint hier!")).toBeInTheDocument();
  expect(screen.getByLabelText("Aankomst")).toHaveAttribute("type", "date");
  expect(screen.getByText("Ruime zonnige tuin")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Recensies" })).toBeInTheDocument();

  const gallery = screen.getByRole("button", {
    name: "Tuin van het vakantiehuis met terras en grasveld",
  }).parentElement;
  expect(gallery).not.toBeNull();
  expect(within(gallery as HTMLElement).getAllByRole("button")).toHaveLength(33);
  expect(
    screen.getByAltText("Parkmascotte aan tafel tijdens kinderanimatie"),
  ).toBeInTheDocument();
});

test("woningpagina bevat alle vereiste ruimtes en bezettingskeuzes", () => {
  renderRoute(<HetHuisje />);

  ["Woonkamer", "Keuken", "Slaapkamer 1", "Slaapkamer 2", "Badkamer", "Schuur", "Tuin"].forEach(
    (name) => expect(screen.getByRole("heading", { name })).toBeInTheDocument(),
  );
  expect(screen.getByText("Koelkast met vriesvak")).toBeInTheDocument();
  expect(screen.getByText("Grasveldje met mogelijkheid tot opzetten tent (+/- 5x4m)")).toBeInTheDocument();
  expect(screen.getByLabelText("Volwassenen")).toHaveDisplayValue("2");
});

test("parkpagina bevat alle afgevinkte voorzieningen en prijzen", () => {
  renderRoute(<HetPark />);

  expect(screen.getByRole("heading", { name: "Zwembaden" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Restaurants" })).toBeInTheDocument();
  expect(screen.getByText("€47,50 per dag")).toBeInTheDocument();
  expect(screen.getByText(/Bongerd-app \(iPhone en Android\)/)).toBeInTheDocument();
});

test("aankomstpagina toont praktische informatie zonder placeholdercodes", () => {
  const { container } = renderRoute(<AankomstVertrek />);

  expect(container.querySelector(".aankomst-hero")).toHaveStyle({
    backgroundImage: "url(/images/slider/slider-12.jpeg)",
  });
  expect(screen.getByText(/maandag na 12:00/)).toBeInTheDocument();
  expect(screen.getByText(/maandag voor 10:00/)).toBeInTheDocument();
  expect(screen.getByText(/WIFI-227/)).toBeInTheDocument();
  expect(screen.getAllByText(/boekingsbevestiging/)).toHaveLength(3);
  expect(container).not.toHaveTextContent("XXXX");
});

test("tarievenpagina toont prijs, borg en betaalvoorwaarden", () => {
  const { container } = renderRoute(<Tarieven />);

  expect(container.querySelector(".tarieven-hero")).toHaveStyle({
    backgroundImage: "url(/images/slider/slider-1.jpeg)",
  });
  expect(screen.getByText("€1300")).toBeInTheDocument();
  expect(screen.getByText(/€300 borg/)).toBeInTheDocument();
  expect(screen.getByText(/Aanbetaling 20%/)).toBeInTheDocument();
  expect(screen.getByText(/maximaal 6 weken verhuren/)).toBeInTheDocument();
});

test("contactpagina bevat het Nederlandse formulier en echte contactgegevens", () => {
  renderRoute(<Contact />);

  ["Naam", "Telefoon", "E-mail", "Bericht"].forEach((label) =>
    expect(screen.getByLabelText(label)).toBeInTheDocument(),
  );
  expect(screen.getByRole("button", { name: "Verstuur bericht" })).toBeInTheDocument();
  expect(screen.getByText(/Nikki:/)).toBeInTheDocument();
  expect(screen.getByTitle("Locatie Capfun De Bongerd")).toBeInTheDocument();
});

test("reserveringspagina bevat alle velden en geeft beschikbaarheidsfeedback", () => {
  renderRoute(<Reserveren />);

  ["Naam", "Telefoon", "E-mail", "Aankomst", "Vertrek", "Volwassenen", "Kinderen", "Baby", "Opmerkingen"].forEach(
    (label) => expect(screen.getByLabelText(label)).toBeInTheDocument(),
  );
  fireEvent.change(screen.getByLabelText("Aankomst"), {
    target: { value: "2026-07-12" },
  });
  fireEvent.change(screen.getByLabelText("Vertrek"), {
    target: { value: "2026-07-19" },
  });
  expect(screen.getByRole("alert")).toHaveTextContent("overlapt");
});

test("footer bevat contact, Nederlandse links en echte sociale bestemmingen", () => {
  renderRoute(<Footer />);

  expect(screen.getByText("bongerd227@gmail.com")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Het huisje" })).toHaveAttribute(
    "href",
    "/het-huisje",
  );
  expect(screen.getByRole("link", { name: /Facebook/ })).toHaveAttribute(
    "href",
    "https://www.facebook.com/capfunbongerd/",
  );
  expect(screen.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
    "target",
    "_blank",
  );
});
