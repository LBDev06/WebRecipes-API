import { RecipeRepository } from "@/repositories/recipe-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { Recipes } from "generated/prisma/client"

interface GetLikedRecipesByUserUseCaseRequest {
    userId: string
}

interface GetLikedRecipesByUserUseCaseResponse {
    recipes: Recipes[]
}

export class GetLikedRecipesByUserUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private recipeRepository: RecipeRepository,
    ){}

   async execute({
        userId
    }: GetLikedRecipesByUserUseCaseRequest): Promise<GetLikedRecipesByUserUseCaseResponse>{
        const user = await this.usersRepository.findById(userId)
        
        if(!user){
            throw new Error('User not found')
        }
       
       const recipes = await this.recipeRepository.findManyRecipesByLike(userId)

       if(!recipes){
        throw new Error('Liked Recipe not found')
       }

        return {
            recipes
        }

    }
}