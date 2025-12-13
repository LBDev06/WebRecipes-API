import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { PrismaRecipeRepository } from "@/repositories/prisma/prisma-recipe-repository";
import { PrismaCommentRepository } from "@/repositories/prisma/prisma-comment-repository";
import { CommentRepositoryUseCase } from "../use-cases/comments/create-comment";

export function makeCreateCommentUseCase(){
  const usersRepository = new PrismaUserRepository()
  const recipeRepository = new PrismaRecipeRepository()
  const commentRepository = new PrismaCommentRepository()
  const createCommentUseCase = new CommentRepositoryUseCase(usersRepository, recipeRepository, commentRepository)

  return createCommentUseCase
}