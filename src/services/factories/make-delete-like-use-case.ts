import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository"
import { PrismaLikeRepository } from "@/repositories/prisma/prisma-like-repository"
import { DeleteLikeUseCase } from "../use-cases/likes/delete-like"

export function makeDeleteLikeUseCase(){
        const usersRepository = new PrismaUserRepository()
        const recipeRepository = new PrismaRecipeRepository()
        const likeRepository = new PrismaLikeRepository()
        const deleteLikeUseCase = new DeleteLikeUseCase(usersRepository, recipeRepository, likeRepository)
    
        return deleteLikeUseCase
}