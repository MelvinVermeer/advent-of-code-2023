export const sum = (a: number, b: number): number => a + b;
export const product = (a: number, b: number): number => a * b;

export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

export const lcm = (a: number, b: number) =>
  a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
