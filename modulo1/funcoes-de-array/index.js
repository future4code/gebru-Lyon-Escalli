//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 01:
//Ele vai imprimir para cada uma das entradas do objeto o nome, o apelido, e o array completo

//EXERCÍCIO 02:
//Vai ser impresso os nomes Amanda Rangel, Laís Petra e Letícia Chijo

//EXERCÍCIO 03:
//Vai retornar os nomes e apelidos que sejam diferentes de Chijo, Amanda Rangel "Mandi", e Laís Petra "Laura"


//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:

const pets = [
    {nome: "Lupin", raca: "Salsicha"},
    {nome: "Polly", raca: "Lhasa Apso"},
    {nome: "Madame", raca: "Poodle"},
    {nome: "Quentinho", raca: "Salsicha"},
    {nome: "Fluffy", raca: "Poodle"},
    {nome: "Caramelo", raca: "Vira-lata"},
]

const nomePets = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomePets)

const arraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(arraySalsicha)

const arrayMensagem = pets.filter((item, index, array) => {
    if (item.raca === "Poodle") {
        console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", item.nome)
    }
    return
})

console.log(arrayMensagem)

//EXERCÍCIO 02:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const arrayNomeProdutos = produtos.map((item, index, array) => {
     return item.nome
})
console.log(arrayNomeProdutos)




const arrayDesconto = produtos.map((item, index, array) => {
    console.log("Item:", item.nome,"preço:", item.preco)
})




const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(arrayBebidas)




const arrayYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(arrayYpe)




const arrayFinal = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê")) {
        console.log("Compre", item.nome," por", item.preco)
    }
    return
})

console.log(arrayFinal)




