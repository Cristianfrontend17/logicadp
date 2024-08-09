export function isLeap(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function runTests() {
  function assertStrictEqual(actual: any, expected: any, message: string) {
    if (actual !== expected) {
      console.error(`Assertion failed: ${message}`);
      console.error(`Expected ${expected}, but got ${actual}`);
    } else {
      console.log(`Test passed: ${message}`);
    }
  }

  function testIsLeap() {
    console.log("Running tests...");

    assertStrictEqual(isLeap(2020), true, "Year 2020 is a leap year");
    assertStrictEqual(isLeap(2000), true, "Year 2000 is a leap year");
    assertStrictEqual(isLeap(2015), false, "Year 2015 is not a leap year");
    assertStrictEqual(isLeap(2100), false, "Year 2100 is not a leap year");

    console.log("All tests completed.");
  }

  testIsLeap();
}

runTests();
