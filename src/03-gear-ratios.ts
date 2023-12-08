import { sum } from "./shared/math";

const hasNeighboringSymbol = (g: string[][], r: number, c: number): boolean => {
  for (let rr of [-1, 0, 1]) {
    for (let cc of [-1, 0, 1]) {
      if (rr === 0 && cc === 0) {
        continue;
      }
      if (
        g[r + rr] &&
        g[r + rr][c + cc] &&
        g[r + rr][c + cc] !== "." &&
        isNaN(parseInt(g[r + rr][c + cc]))
      ) {
        return true;
      }
    }
  }
  return false;
};

export const part1 = (data: string[]): number => {
  // sneakyly add ad . at the end of the line to prevent wrapping
  const g = data.map((row) => (row + ".").split(""));

  const partNumbers: number[] = [];
  let numberUnderInspection: string = "";
  let isPart = true;

  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      const element = parseInt(g[r][c]);

      if (isNaN(element)) {
        if (numberUnderInspection.length > 0 && isPart) {
          partNumbers.push(parseInt(numberUnderInspection));
        }
        isPart = false;
        numberUnderInspection = "";
      } else {
        if (isPart || hasNeighboringSymbol(g, r, c)) {
          isPart = true;
        }
        numberUnderInspection += g[r][c];
      }
    }
  }
  return partNumbers.reduce(sum, 0);
};

export const part2 = (data: any): any => {
  return data;
};
