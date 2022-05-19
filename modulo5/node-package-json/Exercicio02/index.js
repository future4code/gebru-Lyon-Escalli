
//EXERCÍCIO 02

const op = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (op) {
    case "soma":
        console.log(`O resultado da soma é: ${num1 + num2}`)
    break;
    case "sub":
        console.log(`O resultado da subtração é: ${num1 - num2}`)
    break;
    case "mult":
        console.log(`O resultado da multiplicação é: ${num1 * num2}`)
    break;
    case "div":
        console.log(`O resultado da divisão é: ${num1 / num2}`)
    break;
    default:
        console.log(`Informe uma operação valida: soma, sub, mult, div.`)
    break;
}
