import { RecipeRepository } from "@/repositories/recipe-repository";
import { UpdateRecipeDTO } from "@/domain/dtos/recipes/update-recipe-dto";
import { Recipes } from "@/domain/entities/recipes";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { NotAllowedError } from "../../errors/not-allowed-error";

interface EditUseCaseRequest {
  userId:            string;
  recipeId:          string;
  data:              UpdateRecipeDTO['data']
}

interface EditUseCaseResponse {
  updateRecipe: Recipes | null
}

export class EditRecipeUseCase{
    constructor(
    private  recipeRepository: RecipeRepository,
    ){}

    async execute({
    userId,
    recipeId,
    data
    }: EditUseCaseRequest): Promise<EditUseCaseResponse>{
      
  
      const recipe = await this.recipeRepository.findById({id: recipeId})

      if(!recipe){
        throw new ResourceNotFoundError()
      }
        if(recipe.userId !== userId){
        throw new NotAllowedError()
      }

      const updateRecipe = await this.recipeRepository.update({userId: userId, recipeId: recipeId, data: data})

     return {
      updateRecipe
     }


    }
}