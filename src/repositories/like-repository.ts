import { Prisma, Like } from "generated/prisma/client"

export interface LikeRepository{
   create(data: Prisma.LikeCreateInput):Promise<Like>
   delete(data: Prisma.LikeWhereUniqueInput):Promise<Like>
   findById(id: string): Promise<Like| null>
}