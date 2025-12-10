import { FavoriteCreateInput, FavoriteWhereUniqueInput} from "generated/prisma/models";
import { randomUUID } from "crypto";
import { FavoriteRepository } from "../favorite-repository";
import { Favorite } from "generated/prisma/client";

export class InMemoryFavoriteRepository implements FavoriteRepository  {
   public favorites : Favorite[] = []

    async create(data: FavoriteCreateInput): Promise<Favorite> {
        const favorite : Favorite = {
            id: randomUUID(),
            userId: data.user.connect?.id as string,
            recipesId: data.recipes.connect?.id as string,
        }
        
        this.favorites.push(favorite)
        return favorite
    }
    
    async delete(data: FavoriteWhereUniqueInput): Promise<Favorite> {
        const like = this.favorites.findIndex(like=> like.id === data.id)

       if (like === -1) {
       throw new Error('Recipe not found');
       }
          return this.favorites.splice(like, 1)[0];
    }

    async findById(id: string): Promise<Favorite | null> {
        const favorite = this.favorites.find(like=> like.id === id)

        if(!favorite){
          throw new Error('Recipe not found')
        }

        return favorite
    }
  
}