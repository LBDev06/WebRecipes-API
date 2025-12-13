import { CommentRepository } from "../comment-repository";
import { CommentCreateInput } from "generated/prisma/models";
import { randomUUID } from "crypto";
import { Comment } from "generated/prisma/client";

export class InMemoryCommentRepository implements CommentRepository {

   public comments: Comment[] = []

    async create(data: CommentCreateInput): Promise<Comment> {
        const comment: Comment = {
            id:randomUUID(),
            userId: data.user.connect?.id as string,
            recipesId: data.recipes.connect?.id as string,
            comment: data.comment
        }

        this.comments.push(comment)
        return comment
    }

}