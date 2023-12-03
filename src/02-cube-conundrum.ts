import { sum } from "./shared/math";

const LIMITS: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

const isSetPossible = (set: string) =>
  set.split(", ").every((x) => {
    const [n, color] = x.split(" ");
    return Number(n) <= LIMITS[color]!;
  });

const isPossible = (game: any) => game.sets.every(isSetPossible);

export const part1 = (data: string[]): number => {
  return data
    .map((line) => {
      const [id, games] = line.split(": ");
      const a = games.split("; ");
      return { id: Number(id.replace("Game ", "")), sets: a };
    })
    .filter(isPossible)
    .map((x) => x.id)
    .reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
