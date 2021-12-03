
alert("Boas vindas ao jogo de Blackjack!")
console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   const carta = comprarCarta()
   let usuarioPrimeiraCarta = comprarCarta()
   let usuarioSegundaCarta = comprarCarta()
   let computadorPrimeiraCarta = comprarCarta()
   let computadorSegundaCarta = comprarCarta()

   let valorUsuario = usuarioPrimeiraCarta.valor + usuarioSegundaCarta.valor
   let valorComputador = computadorPrimeiraCarta.valor + computadorSegundaCarta.valor

console.log("Cartas do Usuário:", usuarioPrimeiraCarta, usuarioSegundaCarta, "Pontos:", valorUsuario)
console.log("Cartas do Computador:", computadorPrimeiraCarta, computadorSegundaCarta, "Pontos:", valorComputador)

if (valorUsuario > valorComputador) {
   console.log("O Usuário ganhou!")
} else if (valorUsuario < valorComputador) {
   console.log ("O Computador ganhour!")
} else if (valorUsuario === valorComputador) {
   console.log ("O jogo empatou!")
} 

}else {
   alert("O jogo acabou")
}
