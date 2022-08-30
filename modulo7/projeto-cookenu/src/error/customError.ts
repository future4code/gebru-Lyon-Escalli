export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class MissingParameters extends CustomError {
    constructor() {
        super(422, "Parâmetros faltando, verifique a documentação.");
    }
} 

export class NotFound extends CustomError {
    constructor() {
        super(400, "Não foi encontrado resultado.");
    }
}  

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class NotAuthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}