import { FavoriteRepository } from "@/repositories/favorite-repository";

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
        throw new Error(`favorite not found ${userId} -  ${recipesId}`)
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