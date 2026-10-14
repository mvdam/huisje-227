import pricing from "../../website-content/pricing.json";
import { isValidDate } from "./reservations";

export const WEEKLY_RATE = pricing.weeklyRate;
export const OFF_PEAK_WEEKLY_RATE = WEEKLY_RATE * pricing.offPeakMultiplier;
const SUMMER_HOLIDAYS: Record<string, { start: string; end: string }> = pricing.summerHolidays;

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: pricing.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function getStayPrice(start: string, end: string): {
  nights: number;
  total: number;
} | null {
  if (!isValidDate(start) || !isValidDate(end)) return null;
  // Count calendar nights in UTC so daylight-saving changes cannot alter the price.
  const nights = (Date.parse(end) - Date.parse(start)) / 86_400_000;
  if (nights <= 0) return null;
  const arrival = Date.parse(start);
  const departure = Date.parse(end);
  let summerNights = 0;
  const lastNightYear = new Date(departure - 86_400_000).getUTCFullYear();
  for (let year = Number(start.slice(0, 4)); year <= lastNightYear; year++) {
    const summer = SUMMER_HOLIDAYS[String(year)];
    // Do not silently apply a discount to a year without published holiday dates.
    if (!summer) return null;
    summerNights += Math.max(0,
      Math.min(departure, Date.parse(summer.end))
      - Math.max(arrival, Date.parse(summer.start)),
    ) / 86_400_000;
  }
  const total = (summerNights * WEEKLY_RATE
    + (nights - summerNights) * OFF_PEAK_WEEKLY_RATE) / 7;
  return { nights, total: Math.round(total * 100) / 100 };
}
