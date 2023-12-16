import { part1, part2 } from "./06-wait-for-it";
import { readFileSync } from "fs";

const data = readFileSync("src/data/06", "utf8").split("\n");

describe("06 - Wait For It", () => {
  const sample = ["Time:      7  15   30", "Distance:  9  40  200"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(288);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(114400);
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
