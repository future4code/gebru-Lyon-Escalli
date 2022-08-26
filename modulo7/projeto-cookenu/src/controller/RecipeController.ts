import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { idRecipeInputDTO, recipeInputDTO } from "../model/recipe";

export class RecipeController {
  private recipeBusiness: RecipeBusiness
  constructor() {
    this.recipeBusiness = new RecipeBusiness()
  }

      public createRecipe = async (req: Request, res: Response) => {
        try {
          
          const input: recipeInputDTO = {
            title: req.body.title,
            description: req.body.description
          }

          await this.recipeBusiness.createRecipe(input)
    
          res.status(201).send({ message: "Receita criada com sucesso!"});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getRecipeById = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
          const input: idRecipeInputDTO = {
            id: req.params.id
          }
          
          const result = await this.recipeBusiness.getRecipeById(input, token)
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getAllRecipes = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string

          const result = await this.recipeBusiness.getAllRecipes(token)
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

}
