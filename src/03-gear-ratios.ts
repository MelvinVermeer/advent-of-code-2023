const hasNeighboringSymbol = (g: string[][], r: number, c: number): boolean => {
  return true;
};

export const part1 = (data: string[]): number => {
  const g = data.map((row) => row.split(""));

  console.log(g);

  const nonPartNumbers = [];
  let numberUnderInspection: undefined | number = undefined;

  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      const element = g[r][c];

      if (!isNaN(parseInt(element))) {
        console.log(element);
      }

      // numbers dont wrap top a new line
    }
  }

  return 1;
};

export const part2 = (data: any): any => {
  return data;
};
