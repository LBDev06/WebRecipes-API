import { FastifyInstance } from "fastify";
import { createComment } from "../controllers/comment/create-comment";

export function commentRoutes(app: FastifyInstance){
    app.post('/recipes/comment/create-comment', createComment)
}