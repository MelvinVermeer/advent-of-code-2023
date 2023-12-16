import { product } from "./shared/math";

const countWaysToWin = (time: number, record: number): number => {
  let waysToWin = 0;
  let holdTime = 0;

  while (holdTime < time) {
    const distance = holdTime * (time - holdTime);
    if (distance > record) {
      waysToWin++;
    }
    holdTime++;
  }

  return waysToWin;
};

export const part1 = (data: string[]): number => {
  const times = data[0].split(" ").map(Number).filter(Boolean);

  return data[1]
    .split(" ")
    .map(Number)
    .filter(Boolean)
    .map((d, i) => [times[i], d])
    .map(([t, d]) => countWaysToWin(t, d))
    .reduce(product);
};

export const part2 = (data: string[]): number => {
  const times = data[0]
    .replaceAll(" ", "")
    .split(":")
    .map(Number)
    .filter(Boolean);

  return data[1]
    .replaceAll(" ", "")
    .split(":")
    .map(Number)
    .filter(Boolean)
    .map((d, i) => [times[i], d])
    .map(([t, d]) => countWaysToWin(t, d))
    .reduce(product);
};
