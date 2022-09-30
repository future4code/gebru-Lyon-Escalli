export class CustomError extends Error {
  constructor(public statusCode: number, message: string){
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

export class RegisteredUser extends CustomError{ 
  constructor(){
      super(409, "Email Já cadastrado")
  }
}

export class InvalidPassword extends CustomError{ 
  constructor(){
      super(400, "Senha inválida")
  }
}

export class InvalidCredentials extends CustomError{ 
  constructor(){
      super(400, "Email ou senha invalidas")
  }
}

export class Unauthorized extends CustomError{ 
  constructor(){
      super(401, "Usuário não autorizado, por favor faça login novamente.")
  }
}

export class AdminUnauthorized extends CustomError{ 
  constructor(){
      super(401, "Usuário não autorizado, você deve ser administrador para adicionar uma banda.")
  }
}

export class UserNotFound extends CustomError{ 
  constructor(){
      super(404, "Usuário não encontrado")
  }
}

export class ServerError extends CustomError{ 
  constructor(){
      super(500, "Erro inexperado no servidor.")
  }
}