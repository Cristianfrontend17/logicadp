const isLeap = (n: number): boolean => n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);

const tests: [number, boolean][] = [
  [2000, true],
  [1692, true],
  [1731, false],
  [1987, false],
  [2001, false],
  [2014, false],
  [2012, true],
];

tests.forEach(([year, expected]) => {
  const result = isLeap(year);
  console.log(
    `Year: ${year}, Is Leap: ${result}, Passed: ${result === expected}`
  );
});
