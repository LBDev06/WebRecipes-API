import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaFavoriteRepository } from "@/repositories/prisma/prisma-favorite-repository";
import { CreateFavoriteUseCase } from "../../application/use-cases/favorites/create-favorite";

export function makeCreateFavoriteUseCase(){
    const recipeRepository = new PrismaRecipeRepository()
    const favoriteRepository = new PrismaFavoriteRepository()
    const favoriteUseCase = new CreateFavoriteUseCase(recipeRepository, favoriteRepository)

    return favoriteUseCase

}  