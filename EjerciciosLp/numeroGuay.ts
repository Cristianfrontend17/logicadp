function esGuay(numero: number): boolean {
  let suma = 0;

  for (let n = 1; suma < numero; n++) {
    suma += n;
    if (suma === numero) {
      return true;
    }
  }

  return false;
}

function main() {
  const numero = 10;
  if (esGuay(numero)) {
    console.log(`${numero} es guay.`);
  } else {
    console.log(`${numero} no es guay.`);
  }
}

main();
