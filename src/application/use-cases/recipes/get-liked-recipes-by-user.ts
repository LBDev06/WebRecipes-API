import { RecipeRepository } from "@/repositories/recipe-repository"
import { Recipes } from "@/domain/entities/recipes"

interface GetLikedRecipesByUserUseCaseRequest {
    userId: string
}

interface GetLikedRecipesByUserUseCaseResponse {
    recipes: Recipes[]
}

export class GetLikedRecipesByUserUseCase {
    constructor(
        private recipeRepository: RecipeRepository,
    ){}

   async execute({
        userId
    }: GetLikedRecipesByUserUseCaseRequest): Promise<GetLikedRecipesByUserUseCaseResponse>{
       
       const recipes = await this.recipeRepository.findManyRecipesByLike({userId: userId})

        return {
            recipes
        }

    }
}