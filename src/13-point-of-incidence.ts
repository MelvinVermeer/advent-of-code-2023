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
  const rows = pattern.split("\n");

  // horizontal reflection - number of rows above the line of reflection.
  // vertical reflection - number of columns to the left of the line of reflection.
  return 100 * scoreRows(rows) || scoreRows(rotate(rows));
};

const unsmudge = (pattern: string, changeAt: number): string => {
  let newPattern = pattern.split("\n");
  newPattern[changeAt] = pattern[changeAt] === "#" ? "." : "#";
  return newPattern.join("");
};

const scorePattern2 = (pattern: string): number => {
  const rows = pattern.split("\n");
  const score = 100 * scoreRows(rows) || scoreRows(rotate(rows));

  let newScore = score;
  let changeAt = 0;
  // try alternating the pattern
  while (newScore === score) {
    const newRows = unsmudge(pattern, changeAt).split("\n");
    newScore = 100 * scoreRows(newRows) || scoreRows(rotate(newRows));
    changeAt++;
  }

  //  NOT YET WORKING
  console.log({
    score,
    newScore,
    changeAt,
  });

  return newScore;
};

export const part1 = (data: string): number => {
  const patterns = data.split("\n\n");
  const scores = patterns.map(scorePattern);
  return scores.reduce(sum);
};

export const part2 = (data: any): any => {
  const patterns = data.split("\n\n");
  const scores = patterns.map(scorePattern2);
  return scores.reduce(sum);
};
