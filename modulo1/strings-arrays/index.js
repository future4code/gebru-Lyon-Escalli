//EXERCÍCIOS DE INTERPRETAÇÃO

//EXERCÍCIO 01:

// a = undefined
// b = null
// c = 11
// d = 3
// e = Ele vai substituir o valor da primeira posição dentro do array por 19
// f = 9

//EXERCÍCIO 02:

//SUBI NUM ÔNIBUS EM MIRROCOS, 27 

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:

const nomeUsuario = prompt("Qual é o seu primeiro nome?")
const emailUsuario = prompt("Informe o seu email:")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso.`)
console.log(`Seja bem vinda(o), ${nomeUsuario}!`)

//EXERCÍCIO 02:

let comidasFavoritas = ["Pizza", "Chocolate", "Parmegiana", "Sanduíche", "Pastel"]

console.log(comidasFavoritas)

console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let novaComida = prompt("Qual é a sua comida favorita?")

let i=0
comidasFavoritas[i+1] = novaComida

console.log(comidasFavoritas)

//EXERCÍCIO 03:

const listaDeTarefas = []

const tarefa1 = prompt("Informe a primeira tarefa diária:")
const tarefa2 = prompt("Informe a segunda tarefa diária:")
const tarefa3 = prompt("Informe a terceira tarefa diária:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Informe o índice de uma tarefa já realizada: 0, 1 ou 2"))

const tarefaCompleta = listaDeTarefas.splice(tarefaRealizada,1)

console.log(listaDeTarefas)