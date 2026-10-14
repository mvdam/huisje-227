import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getAvailabilityStatus } from "./reservations";
import Reserveren from "../pages/Reserveren";

// A newly configured year must work without changes to the calendar or checker.
vi.mock("../../website-content/reservations.json", () => ({
  default: {
    years: {
      "2028": {
        seasonStart: "2028-05-01",
        seasonEnd: "2028-10-01",
        reservedPeriods: [{ start: "2028-07-08", end: "2028-07-15" }],
      },
      "2030": {
        seasonStart: "2030-06-01",
        seasonEnd: "2030-09-01",
        reservedPeriods: [],
      },
    },
  },
}));

test("JSON years drive the calendar selector, bookings and query arrival year", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/reserveren?aankomst=2028-07-08&vertrek=2028-07-15"]}>
      <Reserveren />
    </MemoryRouter>,
  );
  expect(screen.getByLabelText("Seizoen")).toHaveValue("2028");
  expect(container.querySelectorAll(".week-block.booked")).toHaveLength(1);
  expect(screen.getByRole("alert")).toHaveTextContent("overlapt");
  fireEvent.change(screen.getByLabelText("Seizoen"), { target: { value: "2030" } });
  expect(screen.getByRole("heading", { name: "Seizoen 2030" })).toBeInTheDocument();
  expect(container.querySelectorAll(".week-block.booked")).toHaveLength(0);
  expect(container.querySelectorAll(".week-block.available").length).toBeGreaterThan(0);
  // Changing the overview does not change the dates checked by the form.
  expect(screen.getByRole("alert")).toHaveTextContent("overlapt");
});

test("checks JSON seasons and checkout boundaries without assuming a particular year", () => {
  expect(getAvailabilityStatus("2028-07-08", "2028-07-15")).toBe("booked");
  expect(getAvailabilityStatus("2028-07-01", "2028-07-08")).toBe("available");
  expect(getAvailabilityStatus("2028-07-15", "2028-07-22")).toBe("available");
  expect(getAvailabilityStatus("2030-07-08", "2030-07-15")).toBe("available");
  expect(getAvailabilityStatus("2029-07-08", "2029-07-15")).toBe("unknown");
  expect(getAvailabilityStatus("2030-05-31", "2030-06-08")).toBe("unknown");
  expect(getAvailabilityStatus("2028-09-30", "2029-01-01")).toBe("unknown");
  expect(getAvailabilityStatus("2028-07-08", "2028-07-08")).toBe("invalid");
  expect(getAvailabilityStatus("2028-02-30", "2028-07-08")).toBe("invalid");
  expect(getAvailabilityStatus("nonsense", "2028-07-08")).toBe("invalid");
  expect(getAvailabilityStatus("", "")).toBe("unknown");
});

test("selecting an available period fills both dates and marks the selection", () => {
  render(
    <MemoryRouter initialEntries={["/reserveren?aankomst=2028-07-08&vertrek=2028-07-15"]}>
      <Reserveren />
    </MemoryRouter>,
  );
  expect(screen.getByRole("button", { name: /8 jul.*15 jul.*bezet/ })).toBeDisabled();
  const period = screen.getByRole("button", { name: /15 jul.*22 jul.*Kies deze periode/ });
  fireEvent.click(period);
  expect(screen.getByLabelText("Aankomst")).toHaveValue("2028-07-15");
  expect(screen.getByLabelText("Vertrek")).toHaveValue("2028-07-22");
  expect(period).toHaveAttribute("aria-pressed", "true");
  expect(period).toHaveTextContent("geselecteerd");
  expect(screen.getByText(/Totale huurprijs:/)).toHaveTextContent(/1\.400/);
  expect(screen.getByRole("status")).toHaveTextContent("beschikbaar");
  fireEvent.change(screen.getByLabelText("Vertrek"), { target: { value: "2028-07-23" } });
  expect(period).toHaveAttribute("aria-pressed", "false");
  expect(screen.getByText(/Totale huurprijs:/)).toHaveTextContent(/1\.600/);
  fireEvent.change(screen.getByLabelText("Aankomst"), { target: { value: "2028-07-07" } });
  fireEvent.change(screen.getByLabelText("Vertrek"), { target: { value: "2028-07-09" } });
  expect(screen.getByText(/Totale huurprijs:/)).toHaveTextContent(/350/);
  fireEvent.change(screen.getByLabelText("Aankomst"), { target: { value: "2028-05-08" } });
  fireEvent.change(screen.getByLabelText("Vertrek"), { target: { value: "2028-05-15" } });
  expect(screen.getByText(/Totale huurprijs:/)).toHaveTextContent(/1\.050/);
  fireEvent.change(screen.getByLabelText("Aankomst"), { target: { value: "2031-07-08" } });
  fireEvent.change(screen.getByLabelText("Vertrek"), { target: { value: "2031-07-15" } });
  expect(screen.queryByText(/Totale huurprijs:/)).not.toBeInTheDocument();
  expect(screen.getByText(/Voor dit jaar is nog geen huurprijs beschikbaar/)).toBeInTheDocument();
});

afterEach(() => vi.useRealTimers());

test("expired periods are hidden while an ongoing period stays visible", () => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(2028, 6, 15, 12));
  render(<MemoryRouter><Reserveren /></MemoryRouter>);
  expect(screen.queryByRole("button", { name: /8 jul.*15 jul/ })).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /15 jul.*22 jul/ })).toBeInTheDocument();
  expect(screen.queryByText("verlopen")).not.toBeInTheDocument();
});

test("years with no remaining periods are hidden even when requested by query", () => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(2028, 9, 1, 12));
  render(
    <MemoryRouter initialEntries={["/reserveren?aankomst=2028-07-08"]}>
      <Reserveren />
    </MemoryRouter>,
  );
  expect(screen.queryByRole("option", { name: "2028" })).not.toBeInTheDocument();
  expect(screen.getByLabelText("Seizoen")).toHaveValue("2030");
  expect(screen.getByRole("heading", { name: "Seizoen 2030" })).toBeInTheDocument();
});

test("when all seasons expire the year selector is replaced by an empty message", () => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(2030, 8, 1, 12));
  const { container } = render(<MemoryRouter><Reserveren /></MemoryRouter>);
  expect(screen.queryByLabelText("Seizoen")).not.toBeInTheDocument();
  expect(container.querySelectorAll(".week-block")).toHaveLength(0);
  expect(screen.getByText(/Er zijn geen toekomstige periodes gepubliceerd/)).toBeInTheDocument();
  expect(screen.getByLabelText("Aankomst")).toBeInTheDocument();
});
