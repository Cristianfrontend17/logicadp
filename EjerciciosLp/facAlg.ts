function facAlg(a: number): number {
    let value = 1;

    for (let i = 1; i <= a; i++) {
        value *= i;
    }

    return value;
}

function mainFour() {
    console.log(`!5 = ${facAlg(5)}`);
}

mainFour();
