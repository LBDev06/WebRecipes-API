import { PrismaLikeRepository } from "@/repositories/prisma/prisma-like-repository";
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { CreateLikeUseCase } from "../use-cases/likes/create-like";

export function makeCreateLikeUseCase(){
    const recipeRepository = new PrismaRecipeRepository()
    const likeRepository = new PrismaLikeRepository()
    const likeUseCase = new CreateLikeUseCase(recipeRepository, likeRepository)

    return likeUseCase

}  