import { part1, part2 } from "./14-parabolic-reflector-dish";
import { readFileSync } from "fs";

const data = readFileSync("src/data/14", "utf8").split("\n");

describe("14 - Parabolic Reflector Dish", () => {
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
