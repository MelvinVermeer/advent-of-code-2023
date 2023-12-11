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

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(2);
    });

    it("Sample", () => {
      expect(part1(sample2)).toEqual(6);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(19783);
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
