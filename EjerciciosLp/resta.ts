function subAlg(a: number, b: number): number {
    let value = 0;
    while (a > b) {
        b++;
        value++;
    }
    return value;
}

console.log(`5 - 1 = ${subAlg(5, 1)}`);
