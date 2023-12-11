import { part1, part2 } from "./08-haunted-wasteland";
import { readFileSync } from "fs";

const data = readFileSync("src/data/08", "utf8").split("\n");

describe("08 - Haunted Wasteland", () => {
  const sample = [
    "RL",
    "",
    "AAA = (BBB, CCC)",
    "BBB = (DDD, EEE)",
    "CCC = (ZZZ, GGG)",
    "DDD = (DDD, DDD)",
    "EEE = (EEE, EEE)",
    "GGG = (GGG, GGG)",
    "ZZZ = (ZZZ, ZZZ)",
  ];

  const sample2 = [
    "LLR",
    "",
    "AAA = (BBB, BBB)",
    "BBB = (AAA, ZZZ)",
    "ZZZ = (ZZZ, ZZZ)",
  ];

  const sample3 = [
    "LR",
    "",
    "11A = (11B, XXX)",
    "11B = (XXX, 11Z)",
    "11Z = (11B, XXX)",
    "22A = (22B, XXX)",
    "22B = (22C, 22C)",
    "22C = (22Z, 22Z)",
    "22Z = (22B, 22B)",
    "XXX = (XXX, XXX)",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(2);
    });

    it("Sample2", () => {
      expect(part1(sample2)).toEqual(6);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(19783);
    });
  });

  describe("Part 2", () => {
    it("Sample3", () => {
      expect(part2(sample3)).toEqual(6);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(9177460370549);
    });
  });
});
