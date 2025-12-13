import { Prisma, Comment } from "generated/prisma/client"

export interface CommentRepository {
    create(data: Prisma.CommentCreateInput): Promise<Comment>
}
