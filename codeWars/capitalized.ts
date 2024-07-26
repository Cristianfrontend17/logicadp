function toJadenCase(str: string): string {
  return str
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase())
    .join(" ");
}

let text: string = "How can mirrors be real if our eyes aren't real";
let jadenCaseText: string = toJadenCase(text);

console.log(jadenCaseText);