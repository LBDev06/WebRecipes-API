import { RecipeRepository } from "@/repositories/recipe-repository";
import { NotAllowedError } from "../../errors/not-allowed-error";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error";

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
        throw new ResourceNotFoundError()
      }

      if(recipe.userId !== userId){
        throw new NotAllowedError()
      }

      const deleteRecipe = await this.recipeRepository.delete({id: recipeId})

      return {
        deleteRecipe
      }
    }
}