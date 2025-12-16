import { PrismaCommentRepository } from "@/repositories/prisma/prisma-comment-repository";
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { EditCommentUseCase } from "../use-cases/comments/edit-comment";

export function makeEditCommentUseCase(){
    const usersRepository = new PrismaUserRepository()
    const recipeRepository = new PrismaRecipeRepository()
    const commentRepository = new PrismaCommentRepository()
    const editCommentUseCase = new EditCommentUseCase(usersRepository, recipeRepository, commentRepository)

    return editCommentUseCase
}