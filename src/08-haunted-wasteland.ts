import { lcm } from "./shared/math";

type Instruction = "L" | "R";
type Map = {
  [key: string]: {
    [direction in Instruction]: string;
  };
};

const createMap = (data: string[]): Map =>
  data.reduce((acc, cur) => {
    const [key, value] = cur.split(" = ");
    const [L, R] = value.replace("(", "").replace(")", "").split(", ");
    return {
      ...acc,
      [key]: { L, R },
    };
  }, {});

export const part1 = (data: string[]): number => {
  const [instructions, _, ...rest] = data;
  const map = createMap(rest);
  let location = "AAA";
  let steps = 0;

  while (location !== "ZZZ") {
    for (const instruction of instructions.split("") as Instruction[]) {
      steps++;
      location = map[location][instruction];
      if (location === "ZZZ") {
        break;
      }
    }
  }

  return steps;
};

export const part2 = (data: string[]): any => {
  const [instructions, _, ...rest] = data;
  const map = createMap(rest);

  let steps = 0;

  let locations = Object.keys(map).filter((key) => key.endsWith("A"));
  let solutions = Array(locations.length).fill(0);

  while (!solutions.every((solution) => solution !== 0)) {
    for (const instruction of instructions.split("") as Instruction[]) {
      steps++;
      locations = locations.map((location) => map[location][instruction]);

      for (let i = 0; i < locations.length; i++) {
        if (locations[i].endsWith("Z")) {
          solutions[i] = steps;
        }
      }

      if (solutions.every((solution) => solution !== 0)) {
        break;
      }
    }
  }

  return solutions.reduce(lcm);
};
