import { part1, part2 } from "./19-aplenty";
import { readFileSync } from "fs";

const data = readFileSync("src/data/19", "utf8");

describe("19 - Aplenty", () => {
  const sample = `px{a<2006:qkq,m>2090:A,rfg}
pv{a>1716:R,A}
lnx{m>1548:A,A}
rfg{s<537:gd,x>2440:R,A}
qs{s>3448:A,lnx}
qkq{x<1416:A,crn}
crn{x>2662:A,R}
in{s<1351:px,qqz}
qqz{s>2770:qs,m<1801:hdj,R}
gd{a>3333:R,R}
hdj{m>838:A,pv}

{x=787,m=2655,a=1222,s=2876}
{x=1679,m=44,a=2067,s=496}
{x=2036,m=264,a=79,s=2244}
{x=2461,m=1339,a=466,s=291}
{x=2127,m=1623,a=2188,s=1013}`;

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(19114);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(402185);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(sample);
    });

    // xit("Answer", () => {
    //   expect(part2(data)).toEqual(data);
    // });
  });
});
