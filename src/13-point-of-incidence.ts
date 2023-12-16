import { sum } from "./shared/math";

const print = (a: string[]): void => {
  console.log(a.join("\n"));
};

const rotate = (pattern: string[]): string[] => {
  const a = Array(pattern[0].length).fill("");

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern[i].length; j++) {
      a[j] += pattern[i][j];
    }
  }

  return a;
};

const scoreRows = (rows: string[]): number => {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === rows[i + 1]) {
      // reflection line found
      let found = true;
      const reflection = i + 1;

      let ii = i; // ii goes bock to 0, while j goes forward
      for (let j = reflection; j < rows.length && ii >= 0; j++, ii--) {
        if (rows[ii] !== rows[j]) {
          found = false;
          break;
        }
      }

      if (found) {
        return reflection; // +1 to compensate for 0-based index
      }
    }
  }
  return 0;
};

const scorePattern = (pattern: string): number => {
  // horizontal reflection - number of rows above the line of reflection.
  const rows = pattern.split("\n");

  // vertical reflection - number of columns to the left of the line of reflection.
  return 100 * scoreRows(rows) || scoreRows(rotate(rows));
};

export const part1 = (data: string): number => {
  const patterns = data.split("\n\n");

  const scores = patterns.map(scorePattern);
  return scores.reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
