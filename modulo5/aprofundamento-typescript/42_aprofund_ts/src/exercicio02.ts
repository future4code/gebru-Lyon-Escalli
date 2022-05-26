//a) Entrada é um array de números e a saida é um objeto de números

//b) e c)

function obterEstatisticas(numeros: []) {

    const numerosOrdenados: [] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeDados = {
    numeros: [],
    obterEstatisticas: (numeros: []) => void
}



