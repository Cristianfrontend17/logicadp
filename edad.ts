//get age es una cadena de texto
//toma como parametro age
export function get_age(age: string): number {
    // Extraemos el primer carácter de esa cadena y lo convertimos a numero con parseInt
    return parseInt(age.charAt(0));
  }

//Función de aserción simple
//Una función de utilidad para comparar dos valores (actual y expected)
//y mostrar un mensaje de éxito o error en función de si coinciden.
//actual contiene la cadena de string
//en numero obtenemos el numero 7 de la cadena de string
  function Evaluate(actual: any, number: any, message: string): void {
    if (actual !== number) {
      console.error(`Assertion failed: ${message}. Number ${number}, but got ${actual}`);
    } else {
      console.log(`${message}: Passed`);
    }
  }
  
  // pruebas unitarias
  function runTest() {
    console.log("prueba tests...");
    Evaluate(get_age("2 years old"), 2, "Test 1");
    Evaluate(get_age("4 years old"), 4, "Test 2");
    Evaluate(get_age("5 years old"), 5, "Test 3");
    Evaluate(get_age("7 years old"), 7, "Test 4");
    console.log("tests completed.");
  }

  runTest();  