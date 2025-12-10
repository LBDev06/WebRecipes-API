import { Favorite } from "generated/prisma/client";
import { FavoriteCreateInput, FavoriteWhereUniqueInput } from "generated/prisma/models";
import { FavoriteRepository } from "../favorite-repository";
import { prisma } from '../../lib/prisma'

export class PrismaFavoriteRepository implements FavoriteRepository {

  async create(data: FavoriteCreateInput): Promise<Favorite> {
      const like = await prisma.favorite.create({
        data
      })
      return like
  }

  async delete(data: FavoriteWhereUniqueInput): Promise<Favorite> {
      const like = await prisma.favorite.delete({
        where:data
      })

      return like
  }

  async findById(id: string): Promise<Favorite | null> {
    const favorite = await prisma.favorite.findUnique({
      where:{
        id
      },
      include:{
        user:true,
        recipes:true
      }
    })

    return favorite
  }
}