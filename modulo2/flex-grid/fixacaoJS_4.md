...function contaOcorrencias(arrayDeNumeros,numeroEscolhido) {
...  let quantidade = 0
  
...  if (arrayDeNumeros.includes(numeroEscolhido)) {
...    for (let numero1 of arrayDeNumeros) {
...      if (numero1 === numeroEscolhido){
...        quantidade ++
...      }
...    }
...    return `O número ${numeroEscolhido} aparece ${quantidade}x`
...  } else {
...    return "Número não encontrado"
...  }
...}