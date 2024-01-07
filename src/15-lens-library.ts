import { sum } from "./shared/math";

const hash = (s: string): number => {
  let result = 0;

  for (const c of s.split("")) {
    const asciiValue = c.charCodeAt(0);
    result += asciiValue;
    result *= 17;
    result %= 256;
  }

  return result;
};

export const part1 = (data: string): number =>
  data.split(",").map(hash).reduce(sum);

const getBoxValue = (
  lenses: { label: string; value: number }[],
  boxNumber: number
): number =>
  lenses
    .map(({ value }, index) => (boxNumber + 1) * (index + 1) * value)
    .reduce(sum, 0);

export const part2 = (data: string): number => {
  const operations = data.split(",");
  const boxes: { label: string; value: number }[][] = [];

  for (const operation of operations) {
    const label = operation.replace(/[^a-z]/g, "");
    const boxNumber = hash(label);

    if (!boxes[boxNumber]) {
      boxes[boxNumber] = [];
    }

    const index = boxes[boxNumber].findIndex((x) => x.label === label);
    if (operation.includes("-")) {
      if (index !== -1) {
        boxes[boxNumber].splice(0, index + 1);
      }
    }

    if (operation.includes("=")) {
      const value = parseInt(operation.split("=")[1]);

      if (index !== -1) {
        boxes[boxNumber][index].value = value;
      } else {
        boxes[boxNumber].push({
          label,
          value,
        });
      }
    }
  }

  return boxes.map(getBoxValue).reduce(sum);
};
