export const intersect = <T>(arrays: T[][]): T[] =>
  arrays.reduce(
    (intersection, array) =>
      intersection.filter((item) => array.some((x) => x === item)),
    arrays[0]
  );
