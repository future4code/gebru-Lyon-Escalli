export type recipe = {
   id: string
   title: string
   description: string
   createdAt: string
}

export interface recipeInputDTO {
   title: string,
   description: string
}

export interface idRecipeInputDTO {
   id: string
}