// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let meuArray1 = (array)
   return meuArray1.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let meuArray2 = (array)
  return meuArray2.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let meuArray = (array)
    let numerosPares = function (item) {
        return (item % 2 === 0)
    }
    let novoArray = meuArray.filter(numerosPares)
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let meuArray = (array)
    let maiorNumero = Math.max(...meuArray)
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
       if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB && ladoB !== ladoC) {
        return "Isósceles"
    } else if (ladoA !== ladoB && ladoB === ladoC) {
        return "Isósceles"
    } else if (ladoA === ladoC && ladoC !== ladoB) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]} e ${filme.atores[3]}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
      let anonimo = {
    ...pessoa,
    nome: "ANÔNIMO"
    }
return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = pessoas.filter((item) => {
    return item.altura >= 1.5 &&  item.idade > 14 && item.idade < 60
   })
   return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
       let naoAutorizadas = pessoas.filter((item) => {
        return item.altura <= 1.5 ||  item.idade <= 14 || item.idade >= 60
       })
       return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
