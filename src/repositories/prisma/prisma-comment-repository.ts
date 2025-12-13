import { Comment } from "generated/prisma/client";
import { CommentCreateInput } from "generated/prisma/models";
import { CommentRepository } from "../comment-repository";
import { prisma } from '@/lib/prisma'
  
export class PrismaCommentRepository implements CommentRepository {
    async create(data: CommentCreateInput): Promise<Comment> {
        const comment = await prisma.comment.create({
            data
        })
        return comment
    }
}