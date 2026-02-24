import { RecipeRepository } from "@/repositories/recipe-repository";
import { Recipes } from "@/domain/entities/recipes";

interface GetFavoriteRecipeByUserUseCaseRequest {
    userId: string,
}

interface GetFavoriteRecipeByUserUseCaseResponse {
    recipes: Recipes[]
}

export class GetFavoriteRecipeByUserUseCase {
  constructor(
   private recipeRepository: RecipeRepository
    ){}

    async execute({
        userId
    }: GetFavoriteRecipeByUserUseCaseRequest): Promise<GetFavoriteRecipeByUserUseCaseResponse>{

        const recipes = await this.recipeRepository.findManyRecipesByFavorite({userId: userId})

        return {
            recipes
        }
    }
}