import { UpdateCommentDTO } from "@/domain/dtos/comment/update-comment-dto";
import { Comment } from "@/domain/entities/comment";
import { CommentRepository } from "@/repositories/comment-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { NotAllowedError } from "../errors/not-allowed-error";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface EditCommentUseCaseRequest {
  userId:    string;
  recipeId:  string;
  commentId: string;
  data:      UpdateCommentDTO['data']
}

interface EditCommentUseCaseResponse {
  comment : Comment
}

export class EditCommentUseCase {
    constructor(
        private recipeRepository: RecipeRepository,
        private commentRepository: CommentRepository
    ){}

   async update({
    userId,
    recipeId,
    commentId,
    data
    }: EditCommentUseCaseRequest): Promise<EditCommentUseCaseResponse>{

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

      const comment = await this.commentRepository.update({
        userId: userId, 
        recipesId: recipeId, 
        commentId: commentId,
        data:data
      })

      return {
        comment
      }
    }
}