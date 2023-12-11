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

export const part2 = (data: any): any => {
  return data;
};
