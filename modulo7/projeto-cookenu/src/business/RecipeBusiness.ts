import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError, MissingParameters, NotFound } from "../error/customError";
import { idRecipeInputDTO, recipe, recipeInputDTO } from "../model/recipe";
import DateGenerator from "../services/DateGenerator";
import IdGenerator from "../services/IdGenerator";

export class RecipeBusiness {
  private RecipeDB: RecipeDatabase
  constructor() {
    this.RecipeDB =  new RecipeDatabase()
  }

  public createRecipe = async (input: recipeInputDTO) => {
    try {
      const {title, description} = input

      if (!title || !description) {
        throw new MissingParameters();
      }

      const id = IdGenerator.generateId()
      const today = DateGenerator.generateDate()

      const recipe: recipe = {
        id,
        title,
        description,
        createdAt: today
      }

      await this.RecipeDB.createRecipe(recipe)

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };

  public getRecipeById = async (input: idRecipeInputDTO, token: string) => {
    try {
      let {id} = input

      if (!id || !token) {
        throw new MissingParameters();
      }

      const result = await this.RecipeDB.getRecipeById(id)
      if(!result) {
        throw new NotFound();
      }

      const recipe = {
        id: result.id,
        title: result.title,
        description: result.description,
        createdAt: result.created_at
      }

      return recipe

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };

  public getAllRecipes = async (token: string) => {
    try {
    
      if (!token) {
        throw new MissingParameters();
      }

      const result = await this.RecipeDB.getAllRecipes()
      if(!result) {
        throw new NotFound();
      }

      return result

    } catch (error: any) {
      throw new CustomError(400, "Descrever erro");
    }
  };
  
}
