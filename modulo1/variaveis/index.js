//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 01:
//Como as variáveis 'a' e 'b' foram declaradas com o valor dez,
// na primeira vez que o comando console.log(b) for executado, o console do navegador irá
//imprimir o valor declarado da variável 'b', que é 10. Como posteriormente a variável 'b'
// sofre uma mudança em seu valor, passando a ser declarada como 5, ao ser digitado co comando
//console.log(a,b) o console do navegador irá imprimir a resposta (10,5), pois a variável 'b'
//foi declarada como 'let' e seu valor foi alterado para 5.


//Exercício 02:
//Neste exercício, como as variáveis 'a', 'b' e 'c' são declaradas como 'let'
//podendo sofrer alteração de valores, a resposta que será impressa no console
//do navegador será 10, 10 ,10.


//Exercício 03:
//Este programa solicita informações para o usuário através de caixas de promt
//no navegador, em teoria realiza o calculo das informações coletadas e
//para informar o resultado em uma nova caixa de alert. Neste caso do exercício
// é um calculo do valor recebido por hora trabalhada. Como as informações
//colhidas pelo prompt sempre geram informações do tipo String, fica a dúvida de
//que o calculo seria realmente realizado pelo console do navegador
//sem realizar a conversão para Number das duas variáveis antes.
//Nomes sugeridos: p = horasTrabalhadas / t = salarioDia.



//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 01:

let variavelNome
let variavelIdade

console.log(typeof variavelNome)
console.log(typeof variavelIdade)

//O tipo "undefined" foi impresso porque ambas as variáveis não foram
//declaradas acima com valores respectivos.

variavelNome = prompt ("Qual é o seu nome?")
variavelIdade = prompt ("Qual é a sua idade?")

console.log (typeof variavelNome)
console.log (typeof variavelIdade)

//Após atualizar a página o console imprimiu que ambas as variáveis
//foram declaradas e que agora as duas são do tipo String.

console.log ("Olá",variavelNome,", você tem", variavelIdade, "anos.")

//EXERCÍCIO 02:


let pergunta1 = "Você está vestindo roupa azul agora?"
let pergunta2 = "Você já almoçou hoje?"
let pergunta3 = "Você foi ao cinema hoje?"

let resposta1 = prompt (pergunta1)
let resposta2 = prompt (pergunta2)
let resposta3 = prompt (pergunta3)

console.log (pergunta1,"-",resposta1)
console.log (pergunta2, "-",resposta2)
console.log (pergunta3,"-",resposta3)


//EXERCÍCIO 03:

let a = 10
let b = 25

c = a
d = b
b = c
a = d

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//DESAFIO

let numero1 = prompt ("Informe o primeiro número inteiro")
let numero2 = prompt ("Informe o segundo número inteiro")

valor1 = Number (numero1)
valor2 =  Number (numero2)

x = valor1 + valor2
y = valor1 * valor2

console.log("O primeiro número somado ao segundo número resulta em:",x)
console.log("O primeiro número multiplicado pelo segundo número resulta em:",y)
