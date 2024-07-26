const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
    let years = 0;
    let population = p0;

    for (let years = 0; population < p; years++) {
        population += Math.floor(population * (percent / 100)) + aug;
        console.log(`Año ${years + 1}: ${population} habitantes`);
    }
    
    console.log(years)

    return years;
};

const runTests = () => {
    const assertEqual = (actual: any, expected: any, testName: string) => {
        if (actual === expected) {
            console.log(`aproved${testName}`);
        } else {
            console.error(` not aproved ${testName}`);
            console.error(`   Expected ${expected}, but got ${actual}`);
        }
    };

    assertEqual(nbYear(1500, 5, 100, 5000), 15, 'Test Case 1');
    assertEqual(nbYear(1500000, 2.5, 10000, 2000000), 10, 'Test Case 2');
    assertEqual(nbYear(1500000, 0.25, 1000, 2000000), 94, 'Test Case 3');
    assertEqual(nbYear(1500000, 0.25, -1000, 2000000), 151, 'Test Case 4');
};

runTests();
