import { makeCreateCommentUseCase } from "@/services/factories/make-create-comment-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createComment(req: FastifyRequest, reply: FastifyReply){

   const idSchema = z.object({
    userId:z.string().uuid(),
    recipeId:z.string().uuid()
   })

   const commentSchema = z.object({
    comment:z.string()
    .trim()
    .min(1, "Comentário não pode ser vazio")
    .max(500, "Comentário muito longo")
   })


   const { userId, recipeId}  = idSchema.parse(req.body)
   const { comment } = commentSchema.parse(req.body)

   try {
    const createCommentUseCase = makeCreateCommentUseCase()
    
    const createComment = await createCommentUseCase.create({
        userId,
        recipeId,
        comment
    })

    reply.status(201).send(createComment)

   } catch (error) {
    
   }
}