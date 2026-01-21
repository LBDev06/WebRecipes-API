import { Favorite } from "@/domain/entities/favorite";
import { FavoriteRepository } from "../favorite-repository";
import { db } from '../../lib/prisma'
import { CreateFavoriteDTO } from "@/domain/dtos/favorite/create-favorite";
import { DeleteFavoriteDTO } from "@/domain/dtos/favorite/delete-favorite-dto";
import { FindFavoriteByIdDTO } from "@/domain/dtos/favorite/find-favorite-by-id-dto";

export class PrismaFavoriteRepository implements FavoriteRepository {

  async create(data: CreateFavoriteDTO): Promise<Favorite> {
      const like = await db.favorite.create({
        data:{
          userId: data.userId,
          recipesId: data.recipesId
        }
      })
      return like
  }

  async delete(data: DeleteFavoriteDTO): Promise<void> {
    await db.favorite.delete({
        where:{
          userId_recipesId:{
            userId:data.userId,
            recipesId:data.recipesId
          }
        }
      })
  }

  async findById(data: FindFavoriteByIdDTO): Promise<Favorite | null> {
    const favorite = await db.favorite.findUnique({
      where:{
       userId_recipesId:{
        userId: data.userId,
        recipesId: data.recipesId
       }
      },
      include:{
        user:true,
        recipes:true
      }
    })

    return favorite
  }
}