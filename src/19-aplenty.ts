import { sum } from "./shared/math";

const evaluateSingle = ({ x, m, a, s }: any, workflow: any): string => {
  const lines = workflow.split("{")[1].split("}")[0].split(",");

  for (const line of lines) {
    if (!line.includes(":")) {
      return line;
    }

    const [condition, goto] = line.split(":");

    if (eval(condition)) {
      return goto;
    }
  }

  return "";
};

const evaluate = (part: any, workflows: any) => {
  let goto = "in";

  while (goto !== "A" && goto !== "R") {
    goto = evaluateSingle(part, workflows[goto]);
  }

  return goto;
};

export const part1 = (data: string): number => {
  const [w, p] = data.split("\n\n").map((s) => s.split("\n"));

  const regex = /(\d+)/g;
  const parts = p.map((z) => {
    const [x, m, a, s] = z.split(",").map((y) => parseInt(y.match(regex)![0]));
    return { x, m, a, s };
  });

  const workflows = w.reduce((acc, curr) => {
    return { ...acc, [curr.split("{")[0]]: curr };
  }, {});

  return parts
    .filter((p) => evaluate(p, workflows) === "A")
    .flatMap((p) => Object.values(p))
    .reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
