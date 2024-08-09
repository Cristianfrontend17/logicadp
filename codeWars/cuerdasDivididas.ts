function solution(str: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      result.push(str[i] + str[i + 1]);
    } else {
      result.push(str[i] + "_");
    }
  }

  return result;
}

function assertEquals(actual: any, expected: any, message: string) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error(`Assertion failed: ${message}`);
    console.error(
      `Expected: ${JSON.stringify(expected)}, but got: ${JSON.stringify(
        actual
      )}`
    );
  } else {
    console.log(`Assertion passed: ${message}`);
  }
}

assertEquals(solution("abcdef"), ["ab", "cd", "ef"], "Test Case 1");
assertEquals(solution("abcdefg"), ["ab", "cd", "ef", "g_"], "Test Case 2");
assertEquals(solution(""), [], "Test Case 3");
