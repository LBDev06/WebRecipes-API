import { ResourceNotFoundError } from "@/services/errors/resource-not-found-error";
import { makeCreateLikeUseCase } from "@/services/factories/make-create-like";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createLike(req: FastifyRequest, reply: FastifyReply){
    const idSchema = z.object({
        userId: z.string().uuid(),
        recipeId: z.string().uuid()
    })

   const { userId, recipeId } = idSchema.parse(req.body)

   try {
    const createLikeUseCase = makeCreateLikeUseCase()

    const like = await createLikeUseCase.create({
        userId,
        recipeId
    })
    return reply.status(201).send(like)

   } catch (error) {
      return reply.status(404).send({message: `${error}`})
    
   }
}