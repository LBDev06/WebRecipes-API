import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { EditRecipeUseCase } from "../../application/use-cases/recipes/edit-recipe";

export function makeEditRecipesUseCase(){
    const recipeRepository = new PrismaRecipeRepository()
    const editRecipeUseCase = new EditRecipeUseCase(recipeRepository)
    return editRecipeUseCase
}