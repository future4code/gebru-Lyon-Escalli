import { User } from "./classes/user";
import { Customer } from "./classes/customer";
import { Client } from "./interfaces/client";
import { Place } from "./classes/place";
import { Residence } from "./classes/residence";
import { Commerce } from "./classes/commerce";
import { Industry } from "./classes/industry";

////////////////////////////// HERANÇA /////////////////////////////////

//EXERCÍCIO 01

// a) Não seria possível, pois não há um método Public getPassword na classe.

const novoUsuario: User = new User("01111", "primeirousuario@gmail.com", "Primeiro Usuario", "123456");

// b) Apenas uma vez, mostrando todos os dados que foram informados quando o objeto foi instanciado
// incluindo a password.

//EXERCÍCIO 02

const novoCustomer: Customer = new Customer ("02222", "primeirocustomer@gmail.com", "Primeiro Customer", "123456", "5555-5555-5555-5555");

// a) Apenas uma vez.

// b) Duas vezes, uma devido a chamada do super e outra devido a própria execução da classe pai após chamada
// já guardado na build anteriormente após transpilação.

//EXERCÍCIO 03

//console.log(novoCustomer.getId());
//console.log(novoCustomer.getEmail());
//console.log(novoCustomer.getName());
//console.log(novoCustomer.purchaseTotal);
//console.log(novoCustomer.getCreditCard());

// a) Não por não haver método getPassword.

//EXERCÍCIO 04

// a) console.log(novoCustomer.introduceYourself());

//EXERCÍCIO 05

// a) console.log(novoCustomer.introduceYourself());

////////////////////////////// POLIMORFISMO /////////////////////////////////

//EXERCÍCIO 01

const cliente: Client = {
    name: "ClienteUm",
    registrationNumber: 1,
    consumedEnergy: 200,
    
    calculateBill: () => {
        return 2;
    }
}

//console.log(cliente.name);
//console.log(cliente.registrationNumber);
//console.log(cliente.consumedEnergy);
//console.log(cliente.calculateBill());

// a) Consegui imprimir todos os valores.

//EXERCÍCIO 02

//const newPlace: Place = new Place()
// a) Não é possível criar uma instância de uma classe abstrata.ts(2511)

// c) Criar uma subclasse que se extende a ela, para usar os seus atributos/métodos.

//EXERCÍCIO 03

const novoResidence: Residence = new Residence(10, "90000-000");
const novoCommerce: Commerce = new Commerce(5, "80000-000");
const novoIndustry: Industry = new Industry(30, "70000-000");

console.log(novoResidence.getCep());
console.log(novoCommerce.getCep());
console.log(novoIndustry.getCep());


//EXERCÍCIO 04

// a) Métodos para buscar o cpf e realizar o cálculo da energia consumida de acordo com a instancia realizada.

//EXERCÍCIO 05

// a) Métodos para calculo do consumo de energia e busca de cnpj de acordo com a classe instanciada.

// b) mudança de cpf para cnpj, quantidade de residentes por quantidade de andares.

//EXERCÍCIO 06

// a) Da classe indústria, para herdar atributos iguais para qualquer industria,
// como quantidade de máquinas e cpf (por sua vez herdado da classe Place)

// b) Interface do cliente, para que se mantenha padrão as informações necessárias dos
// clientes ao se instanciar o objeto e informar os dados do construtor.

// c) Porque oo valores do objeto são instanciados via construtor e posteriormente se deseja apenas
// consultar esses dados, e não alterá-los via setters.











