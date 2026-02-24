import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { GetUserRecipesUseCase } from "../../application/use-cases/recipes/get-user-recipes";

export function makeGetUserRecipe(){
    const recipeRepository = new PrismaRecipeRepository()
    const getUserRecipeUseCase = new GetUserRecipesUseCase(recipeRepository)

    return getUserRecipeUseCase
}