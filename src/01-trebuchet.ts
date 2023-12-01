export const part1 = (data: string[]): any => {
  const a = data
    .map(
      (x) =>
        x.split("").find((y) => !isNaN(parseInt(y)))! +
        x.split("").findLast((y) => !isNaN(parseInt(y)))
    )
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
  console.log(a);
  return a;
};

const firstDigit = (x: string): string => {
  if (!isNaN(parseInt(x[0]))) {
    return x[0];
  }

  if (x.startsWith("one")) {
    return "1";
  }
  if (x.startsWith("two")) {
    return "2";
  }
  if (x.startsWith("three")) {
    return "3";
  }
  if (x.startsWith("four")) {
    return "4";
  }
  if (x.startsWith("five")) {
    return "5";
  }
  if (x.startsWith("six")) {
    return "6";
  }
  if (x.startsWith("seven")) {
    return "7";
  }
  if (x.startsWith("eight")) {
    return "8";
  }
  if (x.startsWith("nine")) {
    return "9";
  }

  return firstDigit(x.substring(1));
};

const lastDigit = (x: string): string => {
  if (!isNaN(parseInt(x[x.length - 1]))) {
    return x[x.length - 1];
  }

  if (x.endsWith("one")) {
    return "1";
  }
  if (x.endsWith("two")) {
    return "2";
  }
  if (x.endsWith("three")) {
    return "3";
  }
  if (x.endsWith("four")) {
    return "4";
  }
  if (x.endsWith("five")) {
    return "5";
  }
  if (x.endsWith("six")) {
    return "6";
  }
  if (x.endsWith("seven")) {
    return "7";
  }
  if (x.endsWith("eight")) {
    return "8";
  }
  if (x.endsWith("nine")) {
    return "9";
  }

  return lastDigit(x.substring(0, x.length - 1));
};

export const part2 = (data: string[]): any => {
  const a = data
    .map((x) => firstDigit(x) + lastDigit(x))
    .map((x) => parseInt(x));

  console.log(a);

  return a.reduce((a, b) => a + b);
};
