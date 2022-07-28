//EXERCÍCIO 01

// a) O construtor inicializa uma classe com valores pré-definidos assim qye ela é instanciada.
// Para chamá-lço tem de passar os valores via parâmetros ao criar a nova instância da classe.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {
        return this.balance;
    }
  
    public getTransations(): Transaction[] {
        return this.transactions;
    }
}

const primeiroUsuario: UserAccount = new UserAccount("11111111111", "primeiroUsuario", 20);

// b) Ao rodar o comando npm run start a mensagem apareceu apenas uma vez no console.

// c) Através de métodos getters e setters

//EXERCÍCO 02

// a)

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description:string, value:number, date:string ){
        this.description = description,
        this.value = value,
        this.date = date
    }

    public getDescription(): string {
        return this.description;
    }

    public getValue(): number {
        return this.value;
    }

    public getDate(): string {
        return this.date;
    }
}

const primeiraTransação: Transaction = new Transaction("Deposito valor 155", 155, "12/07/2022");

//EXERCÍCO 03

// a)

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }
}
