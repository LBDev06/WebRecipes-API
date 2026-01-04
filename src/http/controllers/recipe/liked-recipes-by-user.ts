import { makeGetLikedRecipesByUserUseCase } from "@/services/factories/make-get-liked-recipes-by-user-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import z from "zod"


export async function likedRecipesByUser(req: FastifyRequest, reply: FastifyReply){
  const userIdSchema = z.string().uuid()

  const userId = userIdSchema.parse(req.userId)

   try {
    const getLikedRecipesByUserUseCase = makeGetLikedRecipesByUserUseCase()
     
    const { recipes } = await getLikedRecipesByUserUseCase.execute({
        userId
    })

    return reply.status(200).send(
      recipes.map( ({ userId, ...rest }) => rest )
    )

   } catch (error) {
    return reply.status(404).send(error)
   }

}