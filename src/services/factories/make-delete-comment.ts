import { PrismaCommentRepository } from "@/repositories/prisma/prisma-comment-repository";
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { DeleteCommentUseCase } from "../use-cases/comments/delete-comment";

export function makeDeleteCommentUseCase(){
    const usersRepository = new PrismaUserRepository()
    const recipeRepository = new PrismaRecipeRepository()
    const commentRepository = new PrismaCommentRepository()
    const deleteCommentUseCase = new DeleteCommentUseCase(usersRepository, recipeRepository, commentRepository)

    return deleteCommentUseCase
}