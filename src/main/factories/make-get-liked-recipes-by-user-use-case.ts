import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { GetLikedRecipesByUserUseCase } from "../../application/use-cases/recipes/get-liked-recipes-by-user";

export function makeGetLikedRecipesByUserUseCase (){
    const recipeRepository = new PrismaRecipeRepository()
    const getLikedRecipesByUserUseCase = new GetLikedRecipesByUserUseCase(recipeRepository)

    return getLikedRecipesByUserUseCase
}