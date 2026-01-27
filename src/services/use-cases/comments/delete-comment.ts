import { CommentRepository } from "@/repositories/comment-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { NotAllowedError } from "../../errors/not-allowed-error";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error";

interface DeleteCommentUseCaseRequest{
    userId:string;
    recipeId:string;
    commentId:string
}

interface DeleteCommentUseCaseResponse {
    deleteComment: void
}

export class DeleteCommentUseCase {
    constructor(
        private recipeRepository: RecipeRepository,
        private commentRepository: CommentRepository
    ){}

   async delete({
    userId,
    recipeId,
    commentId
   }: DeleteCommentUseCaseRequest): Promise<DeleteCommentUseCaseResponse>{

    const recipe = await this.recipeRepository.findById({id: recipeId})

    if(!recipe){
        throw new ResourceNotFoundError()
    }

    const isExistingComment = await this.commentRepository.findById({id: commentId})
    
    if(!isExistingComment){
        throw new ResourceNotFoundError()
    }
    
    if(isExistingComment.userId !== userId){
        throw new NotAllowedError()
     }

    const deleteComment = await this.commentRepository.delete({
        userId: userId,
        recipesId: recipeId,
        commentId: commentId,
    })
    
    return {
        deleteComment
    }
   }
}