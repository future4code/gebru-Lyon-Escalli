import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

  private static TABLE_NAME = "cookenu_recipes";

  public createRecipe = async (recipe: recipe) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          created_at: recipe.createdAt
        })
        .into(RecipeDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipeById = async (id: string) => {
    try {
      const result = await RecipeDatabase.connection(RecipeDatabase.TABLE_NAME)
      .select()
      .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getAllRecipes = async () => {
    try {
      const result = await RecipeDatabase.connection(RecipeDatabase.TABLE_NAME)
      .select()
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };
}
