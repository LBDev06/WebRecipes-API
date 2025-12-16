import { CommentRepository } from "../comment-repository";
import { CommentCreateInput, CommentUpdateInput } from "generated/prisma/models";
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

    async findById(id: string): Promise<Comment | null> {
        const comment = this.comments.find(comment=> comment.id === id)

        if(!comment){
            throw new Error('Comment not found.')
        }

        return comment
    }
   
    async update(userId: string, recipeId: string, commentId: string, data: CommentUpdateInput): Promise<Comment> {
          const commentIndex = this.comments.findIndex(
            (comment) => comment.recipesId === recipeId && comment.userId === userId && comment.id === commentId
          );
        
          if (commentIndex === -1) {
            throw new Error("Recipe not found");
          }
        
          const current = this.comments[commentIndex];
        
          const updated = {
            ...current,
            ...data,
          } as Comment;
        
          this.comments[commentIndex] = updated;
        
          return updated;
    }

   async delete(userId: string, recipeId: string, commentId: string,){
    
     const index = this.comments.findIndex(u => u.id === commentId && u.userId === userId && u.recipesId === recipeId);

     if (index === -1) {
     throw new Error('Comment not found');
    }
     return this.comments.splice(index, 1)[0];
    }
}