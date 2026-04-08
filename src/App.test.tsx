import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

test("renders navigation with all menu labels and logo", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  const menuLabels = [
    "Home",
    "Het huisje",
    "Aankomst & Vertrek",
    "Tarieven & Voorwaarden",
    "Het Park",
    "Contact",
    "Reserveren",
  ];

  menuLabels.forEach((label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  expect(screen.getByText("Capfun De Bongerd 227")).toBeInTheDocument();
});
