import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { PrismaFavoriteRepository } from "@/repositories/prisma/prisma-favorite-repository";
import { CreateFavoriteUseCase } from "../use-cases/favorites/create-favorite";

export function makeCreateFavoriteUseCase(){
    const usersRepository = new PrismaUserRepository()
    const recipeRepository = new PrismaRecipeRepository()
    const favoriteRepository = new PrismaFavoriteRepository()
    const favoriteUseCase = new CreateFavoriteUseCase(usersRepository, recipeRepository, favoriteRepository)

    return favoriteUseCase

}  