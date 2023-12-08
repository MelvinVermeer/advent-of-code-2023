import { sum } from "./shared/math";

const isSymbol = (s: string): boolean => {
  return s !== "." && isNaN(parseInt(s));
};

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
  const g = data.map((row) => row.split(""));

  // console.log(g);

  const nonPartNumbers: number[] = [];
  let numberUnderInspection: string = "";
  let continueInspection = true;

  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      const element = parseInt(g[r][c]);

      if (isNaN(element)) {
        if (numberUnderInspection.length > 0) {
          nonPartNumbers.push(parseInt(numberUnderInspection));
        }

        numberUnderInspection = "";
        continueInspection = true;
      } else {
        // console.log("numberUnderInspection", numberUnderInspection);
        if (continueInspection) {
          console.log("continueInspection", g[r][c]);
          numberUnderInspection += g[r][c];
        }
        if (hasNeighboringSymbol(g, r, c)) {
          numberUnderInspection = "";
          continueInspection = false;
        }
      }

      // numbers dont wrap top a new line
    }
  }
  console.log(nonPartNumbers);
  return nonPartNumbers.reduce(sum, 0);
};

export const part2 = (data: any): any => {
  return data;
};
