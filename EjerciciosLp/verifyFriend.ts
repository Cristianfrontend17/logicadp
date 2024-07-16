function verifyFriend(a: number, b: number): void {
    let sumA = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            sumA += i;
        }
    }

    let sumB = 0;
    for (let i = 1; i <= b / 2; i++) {
        if (b % i === 0) {
            sumB += i;
        }
    }

    if (a === sumB && b === sumA) {
        console.log(`${a} and ${b} are friends`);
    } else {
        console.log(`${a} and ${b} are not friends`);
    }
}

verifyFriend(6, 8);
