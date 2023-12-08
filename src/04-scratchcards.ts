import { intersect } from "./shared/array";
import { sum } from "./shared/math";

export const part1 = (data: string[]): number => {
  return data
    .map((x) => {
      const a = x
        .split(" | ")[0]
        .split(": ")[1]
        .split(" ")
        .filter((x) => x !== "");

      const b = x
        .split(" | ")[1]
        .split(" ")
        .filter((x) => x !== "");
      const matching = intersect([a, b]).length;
      if (matching > 0) {
        const score = Math.pow(2, matching - 1);
        return score;
      }
      return 0;
    })
    .reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
