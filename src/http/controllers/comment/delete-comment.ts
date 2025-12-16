import { makeDeleteCommentUseCase } from "@/services/factories/make-delete-comment";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteComment(req: FastifyRequest, reply: FastifyReply){
  const idSchema = z.object({
    userId:z.string().uuid(),
    recipeId:z.string().uuid(),
    commentId:z.string().uuid()
  })

  const { userId, recipeId, commentId } = idSchema.parse(req.params)
   
   try {
    const deleteCommentUseCase = makeDeleteCommentUseCase()

    await deleteCommentUseCase.delete({
        userId,
        recipeId,
        commentId
    })

   reply.status(200).send({message:`Deleted comment ${commentId}`})
   } catch (error) {
    reply.status(404).send(error)
   }

}