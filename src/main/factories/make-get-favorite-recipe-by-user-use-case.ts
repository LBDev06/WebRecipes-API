import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { GetFavoriteRecipeByUserUseCase } from "../../application/use-cases/recipes/get-favorite-recipe-by-user";

export function makeGetFavoriteRecipeByUserUseCase (){
    const recipeRepository = new PrismaRecipeRepository()
    const getFavoriteRecipeByUserUseCase = new GetFavoriteRecipeByUserUseCase(recipeRepository)

    return getFavoriteRecipeByUserUseCase
}