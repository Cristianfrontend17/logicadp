export function smaller(nums: number[]): number[] {
  const NewArrayNull = new Array(nums.length).fill(0);
  //   console.log(result)

  for (let i = 0; i < nums.length; i++) {
    // console.log(i)
    let count = 0;
    // console.log(count)
    for (let e = i + 1; e < nums.length; e++) {
      // console.log(nums)
      if (nums[e] < nums[i]) {
        count++;
        // console.log(count)
      }
    }
    NewArrayNull[i] = count;
    console.log(NewArrayNull);
    // console.log(count)
  }

  return NewArrayNull;
  // console.log(result)
}

function assertEqual(actual: number[], expected: number[], msg: string) {
  if (actual.length !== expected.length) {
    console.error(
      `${msg} - Length mismatch: expected ${expected.length} but got ${actual.length}`
    );
    return;
  }

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      console.error(
        `${msg} - Value mismatch at index ${i}: expected ${expected[i]} but got ${actual[i]}`
      );
      return;
    }
  }

  console.log(`${msg} - Passed`);
}

function runTests() {
  assertEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0], "Test Case 1");
  assertEqual(smaller([1, 2, 3]), [0, 0, 0], "Test Case 2");
  assertEqual(smaller([1, 2, 0]), [1, 1, 0], "Test Case 3");
  assertEqual(smaller([1, 2, 1]), [0, 1, 0], "Test Case 4");
  assertEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0], "Test Case 5");
  assertEqual(
    smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]),
    [4, 1, 5, 5, 0, 0, 0, 0, 0],
    "Test Case 6"
  );
}

runTests();