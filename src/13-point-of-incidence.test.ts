import { part1, part2 } from "./13-point-of-incidence";
import { readFileSync } from "fs";

const data = readFileSync("src/data/13", "utf8");

describe("13 - Point of Incidence", () => {
  const sample = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`;

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(405);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(27502);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(400);
    });

    xit("Answer", () => {
      expect(part2(data)).toEqual(0);
    });
  });
});
