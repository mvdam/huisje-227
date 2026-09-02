import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

test("renders navigation with all menu labels and logo", () => {
  render(
    <MemoryRouter initialEntries={["/het-park"]}>
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

  expect(screen.getAllByText("Vakantie op de Bongerd").length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: "Het Park" })).toHaveClass("active");
  expect(document.querySelectorAll(".site-nav a.active")).toHaveLength(1);

  const toggle = screen.getByRole("button", { name: "Navigatiemenu" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(screen.getByRole("navigation", { name: "Hoofdnavigatie" }), {
    key: "Escape",
  });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});
