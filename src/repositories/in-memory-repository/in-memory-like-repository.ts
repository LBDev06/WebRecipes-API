import { Like } from "generated/prisma/client";
import { LikeCreateInput, LikeWhereUniqueInput } from "generated/prisma/models";
import { LikeRepository } from "../like-repository";
import { randomUUID } from "crypto";

export class InMemoryLikeRepository implements LikeRepository {
   public likes : Like[] = []

    async create(data: LikeCreateInput): Promise<Like> {
        const like : Like = {
            id: randomUUID(),
            userId: data.user.connect?.id as string,
            recipesId: data.recipes.connect?.id as string,
        }
        
        this.likes.push(like)
        return like
    }
    
    async delete(data: LikeWhereUniqueInput): Promise<Like> {
        const like = this.likes.findIndex(like=> like.id === data.id)

       if (like === -1) {
       throw new Error('Recipe not found');
       }
          return this.likes.splice(like, 1)[0];
    }

    async findById(id: string): Promise<Like | null> {
        const like = this.likes.find(like=> like.id === id)

        if(!like){
          throw new Error('Recipe not found')
        }

        return like
    }
  
}