// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("Informe a altura do retângulo")
  let largura = prompt("Informe a largura do retângulo")

  areaRetangulo = altura * largura

  console.log(areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Informe o ano atual")
  let nascimento = prompt("Informe seu ano de nascimento")

  let idade = anoAtual - nascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  let IMC = peso / (altura*altura)
 
  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual é o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const listaCores = []

const cor1 = prompt("Informe a sua primeira cor favorita")
const cor2 = prompt("Informe a sua segunda cor favorita")
const cor3 = prompt("Informe a sua terceira cor favorita")

listaCores.push(cor1)
listaCores.push(cor2)
listaCores.push(cor3)

console.log(listaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return (string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let venda = custo / valorIngresso

  return venda

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let resultado1 = string1 >= string2

  return resultado1

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 

  return array [array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  

}