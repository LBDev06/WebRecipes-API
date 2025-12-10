import { FastifyInstance } from "fastify";
import { createLike } from "../controllers/like/create-like";
import { deleteLike } from "../controllers/like/delete-like";

export function likeRoutes(app: FastifyInstance){
    app.post('/recipes/like/create-like', createLike)
    app.delete('/recipes/like/:likeId/:userId/:recipeId/delete', deleteLike)
}