import { RecipeRepository } from "@/repositories/recipe-repository";

interface DeleteRecipeUseCaseRequest {
  userId:   string;
  recipeId: string;
}

interface DeleteRecipeUseCaseResponse {
  deleteRecipe: void
}

export class DeleteRecipeUseCase{
    constructor(
    private  recipeRepository: RecipeRepository,
    ){}

    async delete({
    userId,
    recipeId
    }: DeleteRecipeUseCaseRequest): Promise<DeleteRecipeUseCaseResponse>{

      const recipe = await this.recipeRepository.findById({id: recipeId})

      if(!recipe){
        throw new Error('Recipe not found')
      }

      if(recipe.userId !== userId){
        throw new Error('User not authorized')
      }

      const deleteRecipe = await this.recipeRepository.delete({id: recipeId})

      return {
        deleteRecipe
      }
    }
}