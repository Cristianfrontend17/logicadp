function checkThreeAndTwoOne(array: string[]): boolean {
  const counts = array.reduce((acc, item) => {
    console.log(`Almacenamos cuenta de cada elemento ${item}`);
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const values = Object.values(counts);
  const hasTwo = values.includes(2);
  const hasThree = values.includes(3);

  return hasTwo && hasThree;
}

const tests: [string[], boolean][] = [
  [["a", "a", "a", "b", "b"], true],
  [["a", "b", "c", "b", "c"], false],
  [["a", "a", "a", "a", "a"], false],
];

tests.forEach(([array, expected]) => {
  console.log(`Array: ${JSON.stringify(array)}`);
  const result = checkThreeAndTwoOne(array);
  console.log(`Resultado: ${result}`);
  console.log(`Resultado esperado: ${expected}`);
  console.log("---");
});
