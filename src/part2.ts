import { sum } from "./shared/math";

export const part2 = (data: string[]): number =>
  data
    .map((line) => {
      const [id, games] = line.split(": ");
      return {
        id: Number(id.replace("Game ", "")),
        sets: games
          .split("; ")
          .map((x) =>
            Object.fromEntries(
              x.split(", ").map((y) => {
                const [n, color] = y.split(" ");
                return [color, Number(n)];
              })
            )
          )
          .reduce(
            (lcd, current) => ({
              red: Math.max(lcd.red, current.red ?? 0),
              green: Math.max(lcd.green, current.green ?? 0),
              blue: Math.max(lcd.blue, current.blue ?? 0),
            }),
            { red: 0, green: 0, blue: 0 }
          ),
      };
    })
    .map(({ sets }) => sets.red * sets.green * sets.blue)
    .reduce(sum, 0);
