//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 01:

//Matheus Nachtergaele, Virginia Cavendish, Globo, 14h

//EXERCÍCIO 02:

// Jubo, 3, SRD. A sintaxe dos 3 pontos copia um objeto e permite que
//suas informações internas sejam manipuladas.

//EXERCÍCIO 03:

// false, pois o console solicita mostrar o valor de backender.
// altura undefined, pois não foi atribuído variavel e valor neste nome dentro do objeto.

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:


const  pessoa = {
    nome: "Eduardo",
    apelidos: ["Duda", "Edu", "Junior"]
}

function apresentacao(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

apresentacao(pessoa)

const mesmaPessoa = {
    ...pessoa,
    apelidos: ["Dudinha", "Ed", "Pança"]
}

apresentacao(mesmaPessoa)

//EXERCÍCIO 02:

const numero1 = {
    nome: "Alvaro",
    idade: 15,
    profissao: "estudante"
}

const numero2 = {
    nome:"Allan",
    idade: 20,
    profissao: "Auxiliar ADM"

}

function minhaFuncao2(numero1, numero2){
    return [numero1.nome, numero1.nome.length, numero1.idade, numero1.profissao, numero1.profissao.length]
}

console.log(minhaFuncao2(numero1))
console.log(minhaFuncao2(numero2))

//EXERCÍCIO 03:

const carrinhos = []

const fruta1 = {
    nome:"Banana",
    disponibilidade: true > 0

}

const fruta2 = {
    nome:"Melancia",
    disponibilidade: true > 0

}

const fruta3 = {
    nome:"Maça",
    disponibilidade: true > 0

}

function frutas(fruta1, fruta2, fruta3) {

    addFrutas = carrinhos.push(fruta1.nome),
    addFrutas2 = carrinhos.push(fruta2.nome),
    addFFrutas3 = carrinhos.push(fruta3.nome),

}


console.log(carrinhos)



