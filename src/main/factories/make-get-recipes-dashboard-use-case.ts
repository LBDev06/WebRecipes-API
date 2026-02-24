import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { RecipesDashboardUseCase } from "../../application/use-cases/recipes/recipes-dashboard";

export function makeGetRecipesDashboardUseCase(){
    const recipeRepository = new PrismaRecipeRepository()
    const getRecipesDashboardUseCase = new RecipesDashboardUseCase(recipeRepository)

    return getRecipesDashboardUseCase
}