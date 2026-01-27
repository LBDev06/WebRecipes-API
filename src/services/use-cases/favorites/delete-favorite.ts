import { FavoriteRepository } from "@/repositories/favorite-repository";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error";

interface DeleteFavoriteUseCaseRequest {
    userId:    string;
    recipesId:  string;
}

interface DeleteFavoriteUseCaseResponse {
    deleteFavorite: void
}

export class DeleteFavoriteUseCase{
    constructor(
    private  favoriteRepository: FavoriteRepository
    ){}

    async delete({
      userId,
      recipesId,
    }: DeleteFavoriteUseCaseRequest): Promise<DeleteFavoriteUseCaseResponse>{
      
      const isExitingFavorite= await this.favoriteRepository.findById({
        userId:userId,
        recipesId:recipesId
      })
       
      if(!isExitingFavorite){
        throw new ResourceNotFoundError()
      }

      const deleteFavorite = await this.favoriteRepository.delete({
        userId,
        recipesId
      })

      return {
        deleteFavorite
      }
    }
}