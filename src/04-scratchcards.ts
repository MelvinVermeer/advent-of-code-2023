import { intersect } from "./shared/array";
import { sum } from "./shared/math";

const matchingNumbers = (card: string): number => {
  const a = card
    .split(" | ")[0]
    .split(": ")[1]
    .split(" ")
    .filter((x) => x !== "");

  const b = card
    .split(" | ")[1]
    .split(" ")
    .filter((x) => x !== "");
  return intersect([a, b]).length;
};

export const part1 = (data: string[]): number => {
  return data
    .map((x) => {
      const matching = matchingNumbers(x);
      if (matching > 0) {
        const score = Math.pow(2, matching - 1);
        return score;
      }
      return 0;
    })
    .reduce(sum);
};

export const part2 = (data: string[]): number => {
  const pile = [...data];
  const discardPile: typeof pile = [];

  while (pile.length > 0) {
    const card = pile.shift();
    if (!card) continue;

    const cardNr = parseInt(card.split(": ")[0].split(" ")[1]);

    for (let i = 0; i < matchingNumbers(card); i++) {
      pile.unshift(data[cardNr + i]);
    }

    discardPile.push(card);
  }

  return discardPile.length;
};
