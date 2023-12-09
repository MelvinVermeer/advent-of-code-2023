import { part1, part2 } from "./09-mirage-maintenance";
import { readFileSync } from "fs";

const data = readFileSync("src/data/09", "utf8").split("\n");

describe("09 - Mirage Maintenance", () => {
  const sample = [""];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(sample);
    });

    xit("Answer", () => {
      expect(part1(data)).toEqual(data);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(sample);
    });

    xit("Answer", () => {
      expect(part2(data)).toEqual(data);
    });
  });
});
