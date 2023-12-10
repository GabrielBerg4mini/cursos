// diga se um número é par ou ímpar

let number = 6

function imparOrPar() {
  if (number % 2 === 0) {
    return `"o ${number} é par"`
  } else {
    return `O ${number} é impar`
  }
}

console.log(imparOrPar())
