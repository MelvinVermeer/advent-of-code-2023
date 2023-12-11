import { part1, part2 } from "./07-camel-cards";
import { readFileSync } from "fs";

const data = readFileSync("src/data/07", "utf8").split("\n");

describe("07 - Camel Cards", () => {
  const sample = [
    "32T3K 765",
    "T55J5 684",
    "KK677 28",
    "KTJJT 220",
    "QQQJA 483",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(6440);
    });

    it("Answer", () => {
      expect(part1(data)).toBeLessThan(249104619);
    });

    it("Answer", () => {
      expect(part1(data)).toBeLessThan(249062749);
      console.log(part1(data));
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
