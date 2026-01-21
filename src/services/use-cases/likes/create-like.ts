import { LikeRepository } from "@/repositories/like-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { Like } from "@/domain/entities/like";

interface CreateLikeUseCaseRequest {
    userId:    string;
    recipeId:  string;
}

interface CreateLikeUseCaseResponse {
  like: Like
}

export class CreateLikeUseCase{
    constructor(
    private  recipeRepository: RecipeRepository,
    private  likeRepository: LikeRepository
    ){}

    async create({
      userId,
      recipeId
    }: CreateLikeUseCaseRequest): Promise<CreateLikeUseCaseResponse>{
      
      const recipe = await this.recipeRepository.findById({id: recipeId})

      if(!recipe){
        throw new Error('Recipe not found.')
      }

      const like = await this.likeRepository.create({
         userId: userId,
         recipesId: recipeId
      })

      return {
        like
      }
    }
}