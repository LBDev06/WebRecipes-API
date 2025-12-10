import { LikeRepository } from "@/repositories/like-repository";
import { RecipeRepository } from "@/repositories/recipe-repository";
import { UsersRepository } from "@/repositories/users-repository";
import { Like } from "generated/prisma/client";

interface CreateLikeUseCaseRequest {
    userId:    string;
    recipeId:  string;
}

interface CreateLikeUseCaseResponse {
  like: Like
}

export class CreateLikeUseCase{
    constructor(
    private  usersRepository: UsersRepository,
    private  recipeRepository: RecipeRepository,
    private  likeRepository: LikeRepository
    ){}

    async create({
      userId,
      recipeId
    }: CreateLikeUseCaseRequest): Promise<CreateLikeUseCaseResponse>{
      
      const user = await this.usersRepository.findById(userId)

      if(!user){
        throw new Error('User not found.')
      }
      
      const recipe = await this.recipeRepository.findById(recipeId)

      if(!recipe){
        throw new Error('Recipe not found.')
      }

      const like = await this.likeRepository.create({
       user: {
          connect: { id: userId }
        },
        recipes: {
          connect: { id: recipeId }
        }
      })

      return {
        like
      }
    }
}