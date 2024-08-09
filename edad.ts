export function get_age(age: string): number {
  return parseInt(age.charAt(0));
}

function Evaluate(actual: any, number: any, message: string): void {
  if (actual !== number) {
    console.error(
      `Assertion failed: ${message}. Number ${number}, but got ${actual}`
    );
  } else {
    console.log(`${message}: Passed`);
  }
}

function runTest() {
  console.log("prueba tests...");
  Evaluate(get_age("2 years old"), 2, "Test 1");
  Evaluate(get_age("4 years old"), 4, "Test 2");
  Evaluate(get_age("5 years old"), 5, "Test 3");
  Evaluate(get_age("7 years old"), 7, "Test 4");
  console.log("tests completed.");
}

runTest();
