import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteFavoriteUseCase } from "@/services/factories/make-delete-favorite-use-case";
import z from "zod";

export async function unfavoriteRecipe(req: FastifyRequest, reply: FastifyReply){
  
  const userIdSchema = z.string().uuid()

  const recipeIdSchema = z.object({
    recipesId: z.string().uuid()
  })

  const  userId  = userIdSchema.parse(req.userId)
  const { recipesId } = recipeIdSchema.parse(req.params)

  try {
    const deleteFavoriteUseCase = makeDeleteFavoriteUseCase()

    await deleteFavoriteUseCase.delete({
        userId,
        recipesId
    })

    reply.status(200).send({message:'Favorite deleted'})
  } catch (error) {
    return reply.status(404).send({message: `${error}`})
  }
}