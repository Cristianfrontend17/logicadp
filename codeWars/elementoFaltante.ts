function getMissingElement(superImportantArray: number[]): number {
  const sumaNum = 45;
  const actualSum = superImportantArray.reduce((acc, num) => acc + num, 0);

  return sumaNum - actualSum;
}

const sequence1 = [0, 5, 1, 3, 2, 9, 7, 6, 4];
const sequence2 = [9, 2, 4, 5, 7, 0, 8, 6, 1];

console.log(
  `El número faltante en la secuencia [${sequence1}] es: ${getMissingElement(
    sequence1
  )}`
);
console.log(
  `El número faltante en la secuencia [${sequence2}] es: ${getMissingElement(
    sequence2
  )}`
);
