import { Like } from "generated/prisma/client";
import { LikeCreateInput, LikeWhereUniqueInput } from "generated/prisma/models";
import { LikeRepository } from "../like-repository";
import { prisma } from '../../lib/prisma'

export class PrismaLikeRepository implements LikeRepository {

  async create(data: LikeCreateInput): Promise<Like> {
      const like = await prisma.like.create({
        data
      })
      return like
  }

  async delete(data: LikeWhereUniqueInput): Promise<Like> {
      const like = await prisma.like.delete({
        where:data
      })

      return like
  }

  async findById(id: string): Promise<Like | null> {
    const like = await prisma.like.findUnique({
      where:{
        id
      },
      include:{
        user:true,
        recipes:true
      }
    })

    return like
  }
}