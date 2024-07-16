function mulAlg(a: number, b: number): number {
    let value = 0;

    while (a > 0) {
        a--;
        value += b;
    }

    return value;
}

function main() {
    console.log(`Resultado 5 x 3 = ${mulAlg(5, 3)}`);
}

main();