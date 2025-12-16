import { Comment } from "generated/prisma/client";
import { CommentCreateInput, CommentUpdateInput, CommentWhereUniqueInput } from "generated/prisma/models";
import { CommentRepository } from "../comment-repository";
import { prisma } from '@/lib/prisma'
  
export class PrismaCommentRepository implements CommentRepository {
    async create(data: CommentCreateInput): Promise<Comment> {
        const comment = await prisma.comment.create({
            data
        })
        return comment
    }

    async findById(id: string): Promise<Comment | null> {
        const comment = await prisma.comment.findUnique({
            where:{
                id
            },
        })
        return comment
    }

    async update(userId: string, recipeId: string, commentId:string, data: CommentUpdateInput): Promise<Comment> {
      const comment = await prisma.comment.update({
        where:{
           id:commentId,
           userId:userId,
           recipesId:recipeId,
        },
        data:{
            ...data,
        }
      })
      return comment
  }

  async delete(userId: string, recipesId: string, commentId:string): Promise<Comment> {
      const comment = await prisma.comment.delete({
        where:{
            userId,
            recipesId,
            id:commentId
        }
      })
      return comment
  }
}
