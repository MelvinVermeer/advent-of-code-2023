import { part1, part2 } from "./02-cube-conundrum";
import { readFileSync } from "fs";

const data = readFileSync("src/data/02", "utf8").split("\n");

describe("02 - Cube Conundrum", () => {
  const sample = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(8);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(2486);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(2286);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(87984);
    });
  });
});
