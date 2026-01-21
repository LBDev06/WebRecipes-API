import { FavoriteRepository } from "@/repositories/favorite-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { Favorite } from "@/domain/entities/favorite";

interface CreateFavoriteUseCaseRequest {
    userId:    string;
    recipesId:  string;
}

interface CreateFavoriteUseCaseResponse {
  favorite: Favorite
}

export class CreateFavoriteUseCase{
    constructor(
    private  recipeRepository: RecipeRepository,
    private  favoriteRepository: FavoriteRepository
    ){}

    async create({
      userId,
      recipesId
    }: CreateFavoriteUseCaseRequest): Promise<CreateFavoriteUseCaseResponse>{
      
      const recipe = await this.recipeRepository.findById({id: recipesId})

      if(!recipe){
        throw new Error('Recipe not found.')
      }

      const favorite = await this.favoriteRepository.create({
        userId,
        recipesId
      })

      return {
        favorite
      }
    }
}