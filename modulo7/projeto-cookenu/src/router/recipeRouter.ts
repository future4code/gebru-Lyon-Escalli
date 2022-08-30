import express from "express";

import { RecipeController } from "../controller/RecipeController";

export const recipeRouter = express.Router()

const recipeControl = new RecipeController()

recipeRouter.post('/', recipeControl.createRecipe)
recipeRouter.post('/all', recipeControl.getAllRecipes)
recipeRouter.get('/:id', recipeControl.getRecipeById)

/*
ENDPOINTS
Todos os endpoints, com exceção do Signup e Login, 
devem exigir autenticação.
*/