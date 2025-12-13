import { RecipeRepository } from "@/repositories/recipe-repository";
import { UsersRepository } from "@/repositories/users-repository";
import { CommentRepository } from "@/repositories/comment-repository";
import { Comment } from "generated/prisma/client";

interface CreateCommentUseCaseRequest {
    userId: string;
    recipeId: string;
    comment: string;
}

interface CreateCommentUseCaseUseCaseResponse {
    createComment: Comment
}

export class CreateCommentUseCase {
    constructor(
     private usersRepositoryu: UsersRepository,
     private recipeRepository: RecipeRepository,
     private commentRepository: CommentRepository
    ){}

    async create({
     userId,
     recipeId,
     comment
    }:  CreateCommentUseCaseRequest):Promise<CreateCommentUseCaseUseCaseResponse>{

        const user = await this.usersRepositoryu.findById(userId)

        if(!user){
            throw new Error('User not found.')
        }

        const recipe = await this.recipeRepository.findById(recipeId)

        if(!recipe){
            throw new Error('Recipe not found.')
        }

        const createComment = await this.commentRepository.create({
         user: {
          connect: { id: userId }
        },
        recipes: {
          connect: { id: recipeId }
        },
         comment
        })

       return {
         createComment
       }
    }
}