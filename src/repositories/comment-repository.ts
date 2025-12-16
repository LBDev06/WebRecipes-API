import { Prisma, Comment } from "generated/prisma/client"

export interface CommentRepository {
    create(data: Prisma.CommentCreateInput): Promise<Comment>
    findById(id:string): Promise<Comment | null>
    update(userId: string, recipeId:string, commentId: string, data: Prisma.CommentUpdateInput):Promise<Comment>
    delete(userId: string, recipeId:string, commentId: string):Promise<Comment | null>
}
