function verifyPerfect(number: number): void {
    let value = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            value += i;
        }
    }

    if (value === number) {
        console.log(`${number} is perfect`);
    } else {
        console.log(`${number} is not perfect`);
    }
}

verifyPerfect(29);