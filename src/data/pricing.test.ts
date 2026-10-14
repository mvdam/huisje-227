import { getStayPrice } from "./pricing";

test("prices full weeks and partial weeks by calendar night", () => {
  expect(getStayPrice("2027-04-02", "2027-04-09")).toEqual({ nights: 7, total: 1050 });
  expect(getStayPrice("2027-04-02", "2027-04-16")).toEqual({ nights: 14, total: 2100 });
  expect(getStayPrice("2027-04-02", "2027-04-05")).toEqual({ nights: 3, total: 450 });
  expect(getStayPrice("2027-03-27", "2027-03-29")).toEqual({ nights: 2, total: 300 });
  expect(getStayPrice("2027-10-30", "2027-11-01")).toEqual({ nights: 2, total: 300 });
});

test("does not quote incomplete, invalid, or reversed date selections", () => {
  expect(getStayPrice("", "2027-04-09")).toBeNull();
  expect(getStayPrice("2027-02-30", "2027-04-09")).toBeNull();
  expect(getStayPrice("2027-04-09", "2027-04-09")).toBeNull();
  expect(getStayPrice("2027-04-09", "2027-04-02")).toBeNull();
});

test("summer holidays across all Dutch regions use full price, other nights use 75%", () => {
  expect(getStayPrice("2027-07-10", "2027-07-17")).toEqual({ nights: 7, total: 1400 });
  expect(getStayPrice("2027-08-30", "2027-09-06")).toEqual({ nights: 7, total: 1400 });
  expect(getStayPrice("2027-09-06", "2027-09-13")).toEqual({ nights: 7, total: 1050 });
  expect(getStayPrice("2027-07-09", "2027-07-11")).toEqual({ nights: 2, total: 350 });
  expect(getStayPrice("2027-09-05", "2027-09-07")).toEqual({ nights: 2, total: 350 });
  expect(getStayPrice("2027-07-09", "2027-09-07")).toEqual({ nights: 60, total: 11900 });
  expect(getStayPrice("2027-12-30", "2028-01-02")).toEqual({ nights: 3, total: 450 });
  expect(getStayPrice("2031-07-01", "2031-07-08")).toBeNull();
});
