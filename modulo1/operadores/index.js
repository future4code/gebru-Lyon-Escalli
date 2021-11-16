//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 01:

// A = false
// B = false
// C = true
// D = true

//EXERCÍCIO 02:

//O prompt sempre devolverá informações do tipo String, por isso o cálculo
//matemático não foi realizádo; o console irá concatenar as duas informações e 
//irá imprimir como resultado "primeiroNumerosegundoNumero"

//EXERCÍCIO 03:

//Para corrigir a estrutura do código e fazer a soma funcionar, deverá
// realizar a conversão de String para Number:

//   let primeiroNumero = Number(prompt("Digite um numero!"))
//   let segundoNumero = Number(prompt("Digite outro numero!"))

//   const soma = primeiroNumero + segundoNumero

//   console.log(soma)

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:

const idadeUsuario = Number(prompt("Qual é a sua idade?"))
const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

let idadeComparada = idadeUsuario > idadeAmigo
let resultado = idadeUsuario - idadeAmigo

console.log("A sua idade é maior que a do seu melhor amigo?", idadeComparada)
console.log("A diferença entre ambas as idades é de:", resultado)

//EXERCÍCIO 02:

const numeroPar = Number(prompt("Insira um número par"))
let modPar = numeroPar % 2
console.log(modPar)

//Todas as divisões de números pares não possuem resto da divisão, e o resultado será sempre 0.
//Quando u usuário informa um número impar, o console irá imprimir resto 1.

//EXERCÍCIO 03:

const valorUsuario = Number(prompt("Qual é a sua idade?"))

let meses = valorUsuario * 12
let dias = meses * 365
let horas = dias * 24

console.log("Você tem", valorUsuario,"anos,",meses,"meses,",dias,"dias, e",horas,"horas de vida, parabéns!")

//EXERCÍCIO 04:

const primeiroNumero = Number(prompt("Informe o primeiro número"))
const segundoNumero = Number(prompt("Informe o segundo número"))

let a = primeiroNumero > segundoNumero
let b = primeiroNumero === segundoNumero
let c = primeiroNumero % segundoNumero === 0
let d = segundoNumero % primeiroNumero === 0

console.log("O primeiro numero é maior que segundo?", a)
console.log("O primeiro numero é igual ao segundo?", b)
console.log("O primeiro numero é divisível pelo segundo?", c)
console.log("O segundo numero é divisível pelo primeiro?", d)


