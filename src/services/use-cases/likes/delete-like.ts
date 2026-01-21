import { LikeRepository } from "@/repositories/like-repository";

interface DeleteLikeUseCaseRequest {
    userId:    string;
    recipesId:  string;
}

interface DeleteLikeUseCaseResponse {
    deleteLike: void
  }

export class DeleteLikeUseCase{
    constructor(
    private  likeRepository: LikeRepository
    ){}

    async delete({
      userId,
      recipesId,
    }: DeleteLikeUseCaseRequest): Promise<DeleteLikeUseCaseResponse>{
      
      const isExistingLike = await this.likeRepository.findById({
        userId:userId,
        recipesId:recipesId
      })

      if(!isExistingLike){
        throw new Error(`Like not found ${isExistingLike}`)
      }

      const deleteLike = await this.likeRepository.delete({
        userId:userId,
        recipesId:recipesId
      })

      return {
        deleteLike
      }
    }
}