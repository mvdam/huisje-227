import reservations from "../../website-content/reservations.json";

export type ReservationPeriod = {
  start: string;
  end: string;
};

export type ReservationSeason = {
  seasonStart: string;
  seasonEnd: string;
  reservedPeriods: ReservationPeriod[];
};

export const RESERVATIONS_BY_YEAR: Record<string, ReservationSeason> = reservations.years;
export const RESERVATION_YEARS = Object.keys(RESERVATIONS_BY_YEAR).sort();

export function getDefaultReservationYear(
  arrival = "",
  years = RESERVATION_YEARS,
): string {
  const arrivalYear = arrival.slice(0, 4);
  if (years.includes(arrivalYear)) return arrivalYear;
  const currentYear = String(new Date().getFullYear());
  return years.find((year) => year >= currentYear)
    ?? years.at(-1) ?? "";
}

export type AvailabilityStatus =
  | "available"
  | "booked"
  | "invalid"
  | "unknown";

export function parseLocalDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function getAvailabilityStatus(
  start: string,
  end: string,
): AvailabilityStatus {
  if (!start || !end) return "unknown";

  const selectedStart = parseLocalDate(start);
  const selectedEnd = parseLocalDate(end);
  if (
    !isValidDate(start) || !isValidDate(end) || selectedEnd <= selectedStart
  ) return "invalid";

  const season = RESERVATIONS_BY_YEAR[start.slice(0, 4)];
  if (!season) return "unknown";

  const seasonStart = parseLocalDate(season.seasonStart);
  const seasonEnd = parseLocalDate(season.seasonEnd);
  if (selectedStart < seasonStart || selectedEnd > seasonEnd) return "unknown";

  const conflict = season.reservedPeriods.some((period) => {
    const periodStart = parseLocalDate(period.start);
    const periodEnd = parseLocalDate(period.end);
    return selectedStart < periodEnd && selectedEnd > periodStart;
  });

  return conflict ? "booked" : "available";
}

export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = parseLocalDate(value);
  return date.getFullYear() === Number(value.slice(0, 4))
    && date.getMonth() + 1 === Number(value.slice(5, 7))
    && date.getDate() === Number(value.slice(8, 10));
}
