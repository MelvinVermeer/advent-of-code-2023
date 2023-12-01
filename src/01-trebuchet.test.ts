import { part1, part2 } from "./01-trebuchet";
import { readFileSync } from "fs";

const data = readFileSync("src/data/01", "utf8").split("\n");

describe("01 - Trebuchet", () => {
  const sample = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(142);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(54331);
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
