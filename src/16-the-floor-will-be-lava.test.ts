import { part1, part2 } from "./16-the-floor-will-be-lava";
import { readFileSync } from "fs";

const data = readFileSync("src/data/16", "utf8").split("\n");

describe("16 - The Floor Will Be Lava", () => {
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
