export type user = {
   id: string
   name: string
   email: string
   password: string
   role: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
   role: string
}

export interface LoginUserInputDTO {
   email: string,
   password: string
}

export interface idUserInputDTO {
   id: string
}