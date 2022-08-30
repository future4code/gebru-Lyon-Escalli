import { Index, User } from "../src"


describe ("Testar funcionamento no arquivo index.ts", ( )=> {
    
//a) *Faça um teste com um usuário com o saldo maior do que o valor de compra*
    
    test("Testar saldo é maior que valor", () => {
        const user: User = {
            nome: "Alexey",
            saldo: 700
        }

        const result = Index.performPurchase(user, 300);

        expect(result).toEqual({
            nome: "Alexey",
            saldo: 400
        })
    })
//b) *Faça um teste com um usuário com o saldo igual ao valor de compra*
    test("Testar saldo é igual ao valor", () => {
        const user: User = {
            nome: "Alexey",
            saldo: 400
        }

        const result = Index.performPurchase(user, 400);

        expect(result).toEqual({
            nome: "Alexey",
            saldo: 0
        })
    })
//c) *Faça um teste com um usuário com o saldo menor do que o valor de compra*
    test("Testar saldo é menor que valor", () => {
        const user: User = {
            nome: "Alexey",
            saldo: 200
        }

        const result = Index.performPurchase(user, 500);

        expect(result).toBe(undefined)
    })
})