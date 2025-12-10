import { Prisma, Favorite } from "generated/prisma/client"

export interface FavoriteRepository {
       create(data: Prisma.FavoriteCreateInput):Promise<Favorite>
       delete(data: Prisma.FavoriteWhereUniqueInput):Promise<Favorite>
       findById(id: string): Promise<Favorite| null>
}