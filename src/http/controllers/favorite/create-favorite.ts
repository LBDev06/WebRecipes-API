import { makeCreateFavoriteUseCase } from "@/services/factories/make-create-favorite-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createFavorite(req: FastifyRequest, reply: FastifyReply){
  const idSchema = z.object({
      userId: z.string().uuid(),
      recipeId: z.string().uuid()
  })

  const { userId, recipeId } = idSchema.parse(req.body)

  try {
    const createFavoriteUseCase = makeCreateFavoriteUseCase()
    
    const favorite = await createFavoriteUseCase.create({
        userId,
        recipeId
    })

    return reply.status(201).send(favorite)
  } catch (error) {
    return reply.status(404).send({message: `${error}`})
    
  }
}