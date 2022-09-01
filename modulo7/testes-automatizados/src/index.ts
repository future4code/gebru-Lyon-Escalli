export interface User {
    nome: string,
    saldo: number
}

export class Index {
    public static performPurchase = (user: User, value: number): User | undefined => {

        if ( user.saldo >= value){
            const newValue: number = user.saldo - value
            return {
                nome: user.nome,
                saldo: newValue
            }
        } else {
            return undefined
        }
    }
}