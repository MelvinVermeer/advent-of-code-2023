import { lcm } from "./shared/math";

export const part1 = (data: string[]): number => {
  const [instructions, _, ...rest] = data;

  let location = "AAA";
  let steps = 0;
  const map = rest.reduce((acc, cur) => {
    const [key, value] = cur.split(" = ");
    const [L, R] = value.replace("(", "").replace(")", "").split(", ");
    return {
      ...acc,
      [key]: { L, R },
    };
  }, {});

  while (location !== "ZZZ") {
    for (const instruction of instructions.split("")) {
      steps++;
      // @ts-ignore
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

  let steps = 0;
  const map = rest.reduce((acc, cur) => {
    const [key, value] = cur.split(" = ");
    const [L, R] = value.replace("(", "").replace(")", "").split(", ");
    return {
      ...acc,
      [key]: { L, R },
    };
  }, {});
  let locations = Object.keys(map).filter((key) => key.endsWith("A"));
  let solutions = Array(locations.length).fill(0);

  while (!solutions.every((solution) => solution !== 0)) {
    for (const instruction of instructions.split("")) {
      steps++;
      // @ts-ignore
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

  return solutions.reduce(lcm, 1);
};
