// Calcular el número mínimo de cortes necesarios
//N: FILAS M: COLUMNAS 
export function breakChocolate(n: number, m: number): number {
    return n * m === 0 ? 0 : n * m - 1;
}

function runTests() {
    console.log("Running tests...");
    console.log(`breakChocolate(5, 5) => Expected: 24, Actual: ${breakChocolate(5, 5)}`);
    console.log(`breakChocolate(7, 4) => Expected: 27, Actual: ${breakChocolate(7, 4)}`);
    console.log(`breakChocolate(1, 1) => Expected: 0, Actual: ${breakChocolate(1, 1)}`);
    console.log(`breakChocolate(0, 0) => Expected: 0, Actual: ${breakChocolate(0, 0)}`);
    console.log(`breakChocolate(6, 1) => Expected: 5, Actual: ${breakChocolate(6, 1)}`);
    console.log(`breakChocolate(2, 2) => Expected: 5, Actual: ${breakChocolate(2, 2)}`);
    console.log("Tests completed.");
}

runTests();
