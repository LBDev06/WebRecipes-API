import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { GetLikedRecipesByUserUseCase } from "../use-cases/recipes/get-liked-recipes-by-user";

export function makeGetLikedRecipesByUserUseCase (){
    const usersRepository = new PrismaUserRepository()
    const recipeRepository = new PrismaRecipeRepository()
    const getLikedRecipesByUserUseCase = new GetLikedRecipesByUserUseCase(usersRepository, recipeRepository)

    return getLikedRecipesByUserUseCase
}