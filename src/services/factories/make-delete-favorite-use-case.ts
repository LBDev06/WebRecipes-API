import { PrismaFavoriteRepository } from "@/repositories/prisma/prisma-favorite-repository"
import { DeleteFavoriteUseCase } from "../use-cases/favorites/delete-favorite"

export function makeDeleteFavoriteUseCase(){
        const favoriteRepository = new PrismaFavoriteRepository()
        const deleteFavoriteUseCase = new DeleteFavoriteUseCase(favoriteRepository)
    
        return deleteFavoriteUseCase
}