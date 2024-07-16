function powAlg(a: number, b: number): number {
    let value = 1;

    while (b > 0) { 
        value *= a; 
        b--; 
    }

    return value;
}

function mainTree() {
    console.log(`2 ^ 3 = ${powAlg(2, 3)}`);
}

mainTree();
