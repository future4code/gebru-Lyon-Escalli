// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 01:

// a) Ele recebe a informação numérica do usuário e verifica se o numero calculado com o resto da divisão de 2 é igual a zero.
// b) Numeros pares.
// c) Numeros ímpares

// EXERCÍCIO 02:

// a) Ele informa para o usuário o preço da fruta informada por ele.
// b) O preço da fruta Maçã é R$ 2.25
// c) Ele vai desconsiderar o preço original da Pêra e irá cair no default, imprimindo o valor 5.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 01:

const idadeUsuario = Number(prompt("Qual é a sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


// EXERCÍCIO 02:

const turnoUsuario = prompt("Qual é o seu turno de estudos? Responda M para Matutino, V para Vespertino ou N para Noturno.")

if (turnoUsuario === "M") {
    console.log("Bom dia!")
} else if (turnoUsuario === "V") {
    console.log("Boa tarde!")
} else if (turnoUsuario === "N") {
    console.log("Boa noite!")
}

// EXERCÍCIO 03:

switch (turnoUsuario) {
    case "M":
        console.log ("Bom dia!")
    break
    case "V":
        console.log("Boa tarde!")
    break
    case "N":
        console.log("Boa noite!")
    break
    default:
        console.log("Você não informou corretamente o seu turno de estudos.")
    break
}

// EXERCÍCIO 04:

const filmeUsuario = prompt("Qual o gênero de filme que você deseja assistir?")
const valorIngresso = Number(prompt("Qual é o valor do ingresso?"))

if (filmeUsuario.toLowerCase() === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

        


