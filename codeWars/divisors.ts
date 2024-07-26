function divisors(n: number): number {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(`Divisor I: ${i}`);
      count++;
      if (i !== n / i) {
        console.log(`Divisor N: ${n / i}`);
        count++;
      }
    }
  }
  return count;
}

function assertStrictEqual(actual: any, expected: any, message: string) {
  if (actual !== expected) {
    console.error(
      `Assertion failed: ${message}. Expected ${expected}, but got ${actual}`
    );
  } else {
    console.log(`Assertion passed: ${message}`);
  }
}

function runTests() {
  console.log("Running basic tests...");
  assertStrictEqual(divisors(1), 1, "Testing for 1");
  assertStrictEqual(divisors(10), 4, "Testing for 10");
  assertStrictEqual(divisors(11), 2, "Testing for 11");
  assertStrictEqual(divisors(54), 8, "Testing for 54");
  assertStrictEqual(divisors(64), 7, "Testing for 64");
  console.log("Basic tests completed.");

  console.log("Running extended tests...");
  assertStrictEqual(divisors(500000), 42, "Testing for 500000");
  assertStrictEqual(
    divisors(999983),
    2,
    "Testing for 999983 (a large prime number)"
  );
  assertStrictEqual(divisors(1000000), 49, "Testing for 1000000");
  assertStrictEqual(divisors(123456789), 16, "Testing for 123456789");
  assertStrictEqual(divisors(987654321), 64, "Testing for 987654321");
  console.log("Extended tests completed.");
}

runTests();
