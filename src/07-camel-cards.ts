import { sum } from "./shared/math";

const CARD_RANKS = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

const hasNofAKind = (hand: string[], n: number): boolean => {
  const counts = new Map<string, number>();
  for (const card of hand) {
    const count = counts.get(card) ?? 0;
    counts.set(card, count + 1);
  }
  return Array.from(counts.values()).some((count) => count === n);
};

const hasFiveOfAKind = (hand: string[]): boolean => hasNofAKind(hand, 5);
const hasFourOfAKind = (hand: string[]): boolean => hasNofAKind(hand, 4);
const hasFullHouse = (hand: string[]): boolean =>
  hasNofAKind(hand, 3) && hasNofAKind(hand, 2);
const hasThreeOfAKind = (hand: string[]): boolean => hasNofAKind(hand, 3);
const hasTwoOfAKind = (hand: string[]): boolean => hasNofAKind(hand, 2);
const hasOneOfAKind = (hand: string[]): boolean => hasNofAKind(hand, 1);

const rules = [
  hasFiveOfAKind,
  hasFourOfAKind,
  hasFullHouse,
  hasThreeOfAKind,
  hasTwoOfAKind,
  hasOneOfAKind,
];

const bestHand = (handA: string[], handB: string[]): number => {
  const rankA = rules.findIndex((rule) => rule(handA));
  const rankB = rules.findIndex((rule) => rule(handB));

  if (rankA !== rankB) {
    return rankB - rankA;
  }

  for (let i = 0; i < handA.length; i++) {
    const rankA = CARD_RANKS.indexOf(handA[i]);
    const rankB = CARD_RANKS.indexOf(handB[i]);

    if (rankA !== rankB) {
      return rankB - rankA;
    }
  }

  return 0;
};

const parse = (line: string): [string[], number] => {
  const [hand, bidString] = line.split(" ");
  return [hand.split(""), Number(bidString)];
};

export const part1 = (data: string[]): number => {
  const cards = data
    .map(parse)
    .sort(([handA], [handB]) => bestHand(handA, handB));

  return cards.map(([, bid], rank) => bid * (rank + 1)).reduce(sum, 0);
};

export const part2 = (data: any): any => {
  return data;
};
