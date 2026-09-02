export type ReservationPeriod = {
  start: string;
  end: string;
};

export const AVAILABILITY = {
  year: 2026,
  seasonStart: "2026-05-01",
  seasonEnd: "2026-10-01",
  reservedPeriods: [
    { start: "2026-06-15", end: "2026-06-22" },
    { start: "2026-07-11", end: "2026-07-25" },
    { start: "2026-07-25", end: "2026-08-01" },
    { start: "2026-08-01", end: "2026-08-08" },
    { start: "2026-08-08", end: "2026-08-15" },
  ] satisfies ReservationPeriod[],
} as const;

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
  if (selectedEnd <= selectedStart) return "invalid";

  const seasonStart = parseLocalDate(AVAILABILITY.seasonStart);
  const seasonEnd = parseLocalDate(AVAILABILITY.seasonEnd);
  if (selectedStart < seasonStart || selectedEnd > seasonEnd) return "unknown";

  const conflict = AVAILABILITY.reservedPeriods.some((period) => {
    const periodStart = parseLocalDate(period.start);
    const periodEnd = parseLocalDate(period.end);
    return selectedStart < periodEnd && selectedEnd > periodStart;
  });

  return conflict ? "booked" : "available";
}
