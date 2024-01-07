import { part1, part2 } from "./15-lens-library";
import { readFileSync } from "fs";

const data = readFileSync("src/data/15", "utf8");

describe("15 - Lens Library", () => {
  const sample = "rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7";

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(1320);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(522547);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(145);
    });

    it("Answer", () => {
      const result = part2(data);
      expect(result).toBeGreaterThan(178865); // too low
      expect(result).toBeLessThan(322298); // too low
      console.log(result);
    });
  });
});
