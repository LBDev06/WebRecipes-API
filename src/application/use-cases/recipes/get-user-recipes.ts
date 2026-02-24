import { RecipeRepository } from "@/repositories/recipe-repository";
import { Recipes } from "@/domain/entities/recipes";

interface GetUserRecipesUseCaseRequest {
   userId:   string;
}

interface GetUserRecipesUseCaseResponse {
    recipes: Recipes[]
}

export class GetUserRecipesUseCase {
 
    constructor(
        private recipeRepository: RecipeRepository
    ){}
    
    async execute({
        userId,
    }:GetUserRecipesUseCaseRequest): Promise<GetUserRecipesUseCaseResponse>{

       const recipes = await this.recipeRepository.findManyRecipesByUser({userId: userId})

       return {
        recipes
       }

    }
}