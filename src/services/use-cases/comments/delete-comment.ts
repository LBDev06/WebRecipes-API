import { CommentRepository } from "@/repositories/comment-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { UsersRepository } from "@/repositories/users-repository";

interface DeleteCommentUseCaseRequest{
    userId:string;
    recipeId:string;
    commentId:string
}

export class DeleteCommentUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private recipeRepository: RecipeRepository,
        private commentRepository: CommentRepository
    ){}

   async delete({
    userId,
    recipeId,
    commentId
   }: DeleteCommentUseCaseRequest){
    const user = await this.usersRepository.findById(userId)

    if(!user){
        throw new Error("User not found.")
    }

    const recipe = await this.recipeRepository.findById(recipeId)

    if(recipe?.userId !== user.id){
        throw new Error("User unauthorized.")
    }

    if(!recipe){
        throw new Error("Recipe not found.")
    }

    const comment = await this.commentRepository.findById(commentId)
    
    if(!comment){
        throw new Error("Comment not found.")
    }

    const deleteComment = this.commentRepository.delete(userId, recipeId, commentId)
    
    return {
        deleteComment
    }
   }
}