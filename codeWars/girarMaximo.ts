function maxRot(n: number): number {
  let str = n.toString();

  let max = n;

  console.log(`Max rotation valor ${max}`);

  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];

    const rotatedNumber = parseInt(str, 10);
    if (rotatedNumber > max) {
      max = rotatedNumber;
      console.log(`Rotated number ${rotatedNumber}`);
    }
  }

  return max;
}

function runTests() {
  const testCases: [number, number][] = [
    [38458215, 85821534],
    [195881031, 988103115],
    [896219342, 962193428],
  ];

  testCases.forEach(([input, expected]) => {
    const result = maxRot(input);
    console.log(`maxRot(${input}) = ${result}`);
    console.log(`Expected: ${expected}`);
    console.log(result === expected ? "Test Passed!" : "Test Failed!");
    console.log("----------------------------");
  });
}

runTests();
