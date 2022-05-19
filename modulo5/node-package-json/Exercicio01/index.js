//EXERCÍCIO 01:

//Declara-se uma variável constante que recebe o valor de process.argv[2] 
//na posição 2 em diante. Esta variável/constante pode ser 
//utilizada em qualquer lugar do código.


const nome = process.argv[2]
const idade = Number(process.argv[3])
const resultado = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${resultado}`)
