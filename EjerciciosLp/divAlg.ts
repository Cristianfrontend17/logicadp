function divAlg(a: number, b: number): void {
    let value = 0;

    while (a >= b) {
        value++;
        a -= b;
    }

    console.log(`7 / 3 = ${value} (${a})`);
}

function mainTwo() {
    divAlg(7, 3);
}

mainTwo();
