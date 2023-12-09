import { part1, part2 } from "./05-fertilizer";
import { readFileSync } from "fs";

const data = readFileSync("src/data/05", "utf8");

describe("05 - Fertilizer", () => {
  const sample = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(35);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(910845529);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(46);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(0);
    });
  });
});
