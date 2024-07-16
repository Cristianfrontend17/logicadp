function verifyPrime(number: number): void {
    let prime = true;

    for (let i = 2; i < number && prime; i++) {
        if (number % i === 0) {
            prime = false;
        }
    }

    if (prime) {
        console.log(`${number} is prime`);
    } else {
        console.log(`${number} is not prime`);
    }
}

function mainFive() {
    verifyPrime(5);
}

mainFive();
