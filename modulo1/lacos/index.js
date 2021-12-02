//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 01:

//O código está fazendo um loop numérico de 0 até 5. O console irá imprimir o número 5.

// EXERCÍCIO 02:

// a) Será impresso os números 19, 21, 23, 25, 27, 30; todos maiores que 18.

// b) O for... of... é um método de laços específico para arrays, seria possível com o forEach:

// const lista = [10,11,12,15,18,19,21,23,25,27,30]
// for (let numero of lista) {
//   if (numero > 29) {
//       lista.forEach(function(item,indice) {
//           console.log(item, indice)
//      })
//   }
// }

// EXERCÍCIO 03:

// Ele irá imprimir 4 linhas somando um asterístico em cada linha, indo de 1 a 4. Este exercício foi construído com duas estruturas de laços, uma para a quantidade de linhase  outra para a quantidade de asterístico por linha.

//EXERCÍCIO DE ESCRITA DE CÓDIGO

// EXERCÍCIO 01:

let animaisUsuario = []
const numeroAnimais = Number(prompt("Quantos bichinhos de estimação você tem em casa?"))

if (numeroAnimais === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (numeroAnimais > 0) {
        for (let i=0; i<numeroAnimais; i++){
           let nomeAnimais = prompt("Qual é o nome do seus bichinhos? Informe um por um:")
           let addAnimais = animaisUsuario.push (nomeAnimais)
        } 
}

console.log(animaisUsuario)

// EXERCÍCIO 02:

let arrayOriginal = [1, 2, 3, 4, 5]

for (let numero of arrayOriginal) {
    if ( numero < arrayOriginal.length + 1) {
        console.log (numero)
    }
}

for (let numero of arrayOriginal) {
    if (numero < arrayOriginal.length +1) {
        console.log(numero / 10)
    }
}

for (let numero of arrayOriginal) {
    if ((numero % 2) == 0) {
        let novoArray = []
        let addnumero = novoArray.push(numero)
        console.log(novoArray)
    }
}

for (let numero of arrayOriginal) {
    if ( numero === arrayOriginal.length) {
        arrayOriginal.forEach(function(item,valor) {
        let stringArray = ["O elemento do index", item, "é:", valor]
        let addstring = stringArray.push(numero)
        console.log (stringArray)
        })
    }
}

