import { PositionInTime } from "../../../application/interfaces";
import { validatePath } from "../../../application/validators/custom/validatePath";

it("path should be an array", () => {
  expect(validatePath("asd")).toBe(false);
});

it("path should have at least two points", () => {
  const emptyPath: ReadonlyArray<PositionInTime> = [];
  const onePointPath: ReadonlyArray<PositionInTime> = [
    { latitude: 23, longitude: 44, time: 22 }
  ];
  const twoPointsPath: ReadonlyArray<PositionInTime> = [
    { latitude: 44, longitude: 17, time: 232 },
    { latitude: 22, longitude: 55, time: 3424 }
  ];
  expect(validatePath(emptyPath)).toBe(false);
  expect(validatePath(onePointPath)).toBe(false);
  expect(validatePath(twoPointsPath)).toBe(true);
});

it("every point should have lat, lng and time props -> all numbers", () => {
  const wrongProps = [{ latit: 23, asd: 23 }, {}];
  const missingProps = [
    { latitude: 23, longitude: 117 },
    { latitude: 124, longitude: 25, time: 2342 }
  ];
  const wrongValues = [
    { latitude: "23", longitude: 44, time: 23 },
    { latitude: 23, longitude: 63, time: "24" }
  ];
  expect(validatePath(missingProps)).toBe(false);
  expect(validatePath(wrongProps)).toBe(false);
  expect(validatePath(wrongValues)).toBe(false);
});
