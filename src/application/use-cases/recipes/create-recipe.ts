import { RecipeRepository } from "@/repositories/recipe-repository";
import { Recipes } from "generated/prisma/browser";

interface RecipeUseCaseRequest {
  id:                 string;
  recipe_title:       string;
  description:        string;
  recipe_image:       string;
  cook_time:          string;
  servings:           string;
  ingredients:        string[];
  cook_instructions:  string[];
}

interface RecipeUseCaseResponse {
  recipe: Recipes
}

export class CreateRecipeUseCase{
    constructor(
    private  recipeRepository: RecipeRepository,
    ){}

    async create({
    id,
    recipe_title,
    description,
    recipe_image,
    cook_time,
    servings,
    ingredients,
    cook_instructions,
    }: RecipeUseCaseRequest): Promise<RecipeUseCaseResponse>{
      
      const recipe = await this.recipeRepository.create({
        recipe_title,
        description,
        recipe_image,
        cook_time,
        servings,
        ingredients,
        cook_instructions,
        userId: id
      })
     
      return {
        recipe
      }
    }
}