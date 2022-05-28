const recebeVariavel = (variavel:any): void => {
    if (typeof variavel === "string") {
        console.log("A variável é uma string")
    } else if (typeof variavel === "number") {
        console.log("A variável é um número inteiro")
    } else if (typeof variavel === "boolean") {
        console.log("A variável é um booleano")
    } else if (typeof variavel === "object") {
        console.log("A variável é um objeto")
    } else if (typeof variavel === "function") {
        console.log("A variável é uma função")
    } else {
        console.log("Desconhecido")
    }
}
