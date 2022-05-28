// let minhaString: string = 0

//O erro apresentado se deve a um valor número não poder ser 
//atribuído a uma variável tipada como string.

let meuNumero:number = 5;

//para fazer com que a variável aceite dois valores tem de 
//usar o OU entre as duas tipagens:  let meuNumero: number | string;

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: arcoIris
}

enum arcoIris {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

const marcos: pessoa = {
    nome: "Marcos",
    idade: 20,
    corFavorita: arcoIris.AZUL
}

const sara: pessoa = {
    nome: "Sara",
    idade: 25,
    corFavorita: arcoIris.VERMELHA
}

const pedro: pessoa = {
    nome: "Pedro",
    idade: 17,
    corFavorita: arcoIris.VERDE
}