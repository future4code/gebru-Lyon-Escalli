// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 01:

//a) 10 e 50 respectivamente

//b) nada apareceria; a função continuaria afuncionar, pois está dando retorno, mas
//como não está sendo solicitado a exibição desse retorno no console
// então não aparecerá nada.

//EXERCÍCIO 02:

//a) Esta função recebe a entrada de uma string informada pelo usuário
// e deixa todas as suas letras em tamanho minúsculo, e informa em booleano se existe neste texto
//a palavra 'cenoura'.

//b)

// I - eu gosto de cenoura, true
// II - cenoura é bom pra vista, true
// III - cenouras cerscem na terra, false

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:

//a)

function exercicioA() {
    const meusDados01 = "Eu sou Lyon, tenho 27 anos, moro em Alvorada/RS e sou estudante."

    console.log(meusDados01)
}

exercicioA()


//b)

function exercicioB (nome, idade, cidade, profissao) {

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

}

const meuNome = "Lyon"
const minhaIdade = 27
const minhaCidade = "Alvorada/RS"
const minhaProfissao = "Estudante"

console.log(exercicioB(meuNome, minhaIdade, minhaCidade, minhaProfissao))

//EXERCÍCIO 02:

//a)

function somar(numero1,numero2){
    return numero1 + numero2
}

console.log(somar(5,10))

//b)

function verdadeiroFalso(numero1,numero2) {
    return numero1 >= numero2
}

//c)

function ePar(numero1){

    return numero1%2 === 0
}

//d)

function string(mensagem){
    
    let variavel2 = mensagem.toUpperCase()

    return variavel2
}

const mensagem = "Olá, Mundo!"

console.log(string(mensagem).length, string(mensagem))

//EXERCÍCIO 03:

function soma(numero1,numero2) {
    return numero1 + numero2
}

function subtracao(numero1,numero2) {
    return numero1 - numero2
}

function multiplicacao(numero1,numero2) {
    return numero1 * numero2
}

function divisao(numero1,numero2) {
    return numero1 / numero2
}

const primeiroNumero = Number(prompt("Informe o primeiro número:"))
const segundoNumero = Number(prompt("Informe o segundo número:"))

console.log(soma(primeiroNumero,segundoNumero))
console.log(subtracao(primeiroNumero,segundoNumero))
console.log(multiplicacao(primeiroNumero,segundoNumero))
console.log(divisao(primeiroNumero,segundoNumero))
