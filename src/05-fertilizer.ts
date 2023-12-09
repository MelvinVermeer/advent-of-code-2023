const mapX = (almanac: string, value: number): number => {
  const [name, ...rangesString] = almanac.split("\n");
  const ranges = rangesString.map((x) => x.split(" ").map((y) => parseInt(y)));

  for (const range of ranges) {
    const [dest, src, length] = range;

    if (value >= src && value <= src + length) {
      return dest + (value - src);
    }
  }

  return value;
};

export const part1 = (data: string): number => {
  const [seedsLine, ...maps] = data.split("\n\n");

  const seeds = seedsLine
    .split(": ")[1]
    .split(" ")
    .map((x) => parseInt(x));

  const values = seeds
    .map((s) => mapX(maps[0], s))
    .map((s) => mapX(maps[1], s))
    .map((s) => mapX(maps[2], s))
    .map((s) => mapX(maps[3], s))
    .map((s) => mapX(maps[4], s))
    .map((s) => mapX(maps[5], s))
    .map((s) => mapX(maps[6], s));
  return Math.min(...values);
};

export const part2 = (data: string): number => {
  const [seedsLine, ...maps] = data.split("\n\n");

  const seeds: number[] = [];

  const seedsRanges = seedsLine
    .split(": ")[1]
    .split(" ")
    .map((x) => parseInt(x));

  while (seedsRanges.length > 0) {
    const [start, length] = seedsRanges.splice(0, 2);
    seeds.push(
      ...Array(length)
        .fill(start)
        .map((x, i) => x + i)
    );
  }

  const values = seeds
    .map((s) => mapX(maps[0], s))
    .map((s) => mapX(maps[1], s))
    .map((s) => mapX(maps[2], s))
    .map((s) => mapX(maps[3], s))
    .map((s) => mapX(maps[4], s))
    .map((s) => mapX(maps[5], s))
    .map((s) => mapX(maps[6], s));

  return Math.min(...values);
};
