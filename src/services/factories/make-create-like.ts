import { PrismaLikeRepository } from "@/repositories/prisma/prisma-like-repository";
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { CreateLikeUseCase } from "../use-cases/likes/create-like";

export function makeCreateLikeUseCase(){
    const usersRepository = new PrismaUserRepository()
    const recipeRepository = new PrismaRecipeRepository()
    const likeRepository = new PrismaLikeRepository()
    const likeUseCase = new CreateLikeUseCase(usersRepository, recipeRepository, likeRepository)

    return likeUseCase

}  