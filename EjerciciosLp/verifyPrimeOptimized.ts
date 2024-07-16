function verifyPrimeOptimized(number: number): void {
    let prime = true;

    
    for (let i = 2; i <= number / 2 && prime; i++) {
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

verifyPrimeOptimized(100);
