import { sum } from "./shared/math";

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const firstDigit = (x: string): number => {
  if (!isNaN(parseInt(x[0]))) {
    return Number(x[0]);
  }

  for (const number of numbers) {
    if (x.startsWith(number)) {
      return numbers.indexOf(number) + 1;
    }
  }

  return firstDigit(x.substring(1));
};

const lastDigit = (x: string): number => {
  if (!isNaN(parseInt(x[x.length - 1]))) {
    return Number(x[x.length - 1]);
  }

  for (const number of numbers) {
    if (x.endsWith(number)) {
      return numbers.indexOf(number) + 1;
    }
  }

  return lastDigit(x.substring(0, x.length - 1));
};

export const part1 = (data: string[]): any =>
  data
    .map((x) => x.split(""))
    .map(
      (x) =>
        x.find((y) => !isNaN(parseInt(y)))! +
        x.findLast((y) => !isNaN(parseInt(y)))
    )
    .map((x) => parseInt(x))
    .reduce(sum);

export const part2 = (data: string[]): any =>
  data
    .map((x) => `${firstDigit(x)}${lastDigit(x)}`)
    .map((x) => parseInt(x))
    .reduce(sum);
