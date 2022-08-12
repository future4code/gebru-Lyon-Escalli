export class CustomError extends Error {
    constructor (
        public statusCode: number,
        public message: string
    ) {
        super(message)
    }
}

export class MissingParameters extends CustomError {
    constructor() {
        super(400, "Parâmetros faltando, verifique a documentação.");
    }
} 

export class NotFound extends CustomError {
    constructor() {
        super(400, "Não foi encontrado resultado.");
    }
} 