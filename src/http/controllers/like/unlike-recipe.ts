import { makeDeleteLikeUseCase } from "@/services/factories/make-delete-like-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function unlikeRecipe(req: FastifyRequest, reply: FastifyReply){
  
  const userIdSchema = z.string().uuid()

  const recipeIdSchema = z.object({
    recipesId: z.string().uuid()
  })

  const  userId  = userIdSchema.parse(req.userId)
  const { recipesId } = recipeIdSchema.parse(req.params)

  try {
    const deleteLikeUseCase = makeDeleteLikeUseCase()

    await deleteLikeUseCase.delete({
        userId,
        recipesId
    })

    reply.status(200).send({message:'Like deleted'})
  } catch (error) {
    return reply.status(404).send({message: `${error}`})
  }
}