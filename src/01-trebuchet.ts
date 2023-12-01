export const part1 = (data: string[]): any => {
  const a = data
    .map(
      (x) =>
        x.split("").find((y) => !isNaN(parseInt(y)))! +
        x.split("").findLast((y) => !isNaN(parseInt(y)))
    )
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
  console.log(a);
  return a;
};

export const part2 = (data: any): any => {
  return data;
};
