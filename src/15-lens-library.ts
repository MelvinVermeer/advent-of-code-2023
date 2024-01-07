import { sum } from "./shared/math";

const hash = (s: string): number => {
  let result = 0;

  for (const c of s.split("")) {
    const asciiValue = c.charCodeAt(0);
    result += asciiValue;
    result *= 17;
    result = result % 256;
  }

  return result;
};

export const part1 = (data: string): number => {
  const a = data.split(",");
  const b = a.map(hash);
  return b.reduce(sum);
};

export const part2 = (data: string): number => {
  const operations = data.split(",");
  console.log(operations);

  const labels = operations.map((x) => x.replace(/[^a-z]/g, "")).map(hash);
  console.log(labels);

  const boxes = Array(256).fill([]) as { label: string; value: number }[][];

  for (const operation of operations) {
    const label = operation.replace(/[^a-z]/g, "");

    if (operation.includes("-")) {
      const index = boxes[hash(label)].findIndex((x) => x.label === label);
      if (index !== -1) {
        boxes[hash(label)].splice(0, index + 1);
      }
    }

    if (operation.includes("=")) {
      // If the operation character is an equals sign (=), it will be followed by a number indicating the focal length of the lens that needs to go into the relevant box; be sure to use the label maker to mark the lens with the label given in the beginning of the step so you can find it later. There are two possible situations:

      const index = boxes[hash(label)].findIndex((x) => x.label === label);

      if (index !== -1) {
        // If there is already a lens in the box with the same label, replace the old lens with the new lens: remove the old lens and put the new lens in its place, not moving any other lenses in the box.
        boxes[hash(label)][index].value = parseInt(
          operation.replace(/[^0-9]/g, "")
        );
      } else {
        // If there is not already a lens in the box with the same label, add the lens to the box immediately behind any lenses already in the box. Don't move any of the other lenses when you do this. If there aren't any lenses in the box, the new lens goes all the way to the front of the box.
        boxes[hash(label)].push({
          label,
          value: parseInt(operation.replace(/[^0-9]/g, "")),
        });
      }
    }
  }

  // console.log(boxes.filter((x) => x.length > 0));

  return 0;
};
