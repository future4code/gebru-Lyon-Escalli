function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    preco = 1.30
  } else {
    preco = 1.00
  }
  let valor = quantidade * preco
  return valor
}