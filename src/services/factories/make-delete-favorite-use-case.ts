import { PrismaFavoriteRepository } from "@/repositories/prisma/prisma-favorite-repository"
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository"
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { DeleteFavoriteUseCase } from "../use-cases/favorites/delete-favorite"


export function makeDeleteFavoriteUseCase(){
        const usersRepository = new PrismaUserRepository()
        const recipeRepository = new PrismaRecipeRepository()
        const favoriteRepository = new PrismaFavoriteRepository()
        const deleteFavoriteUseCase = new DeleteFavoriteUseCase(usersRepository, recipeRepository, favoriteRepository)
    
        return deleteFavoriteUseCase
}