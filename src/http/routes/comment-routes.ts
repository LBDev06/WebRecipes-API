import { FastifyInstance } from "fastify";
import { createComment } from "../controllers/comment/create-comment";
import { editComment } from "../controllers/comment/edit-comment";
import { deleteComment } from "../controllers/comment/delete-comment";

export function commentRoutes(app: FastifyInstance){
    app.post('/recipes/comment/create-comment', createComment)
    app.patch('/recipes/comment/:userId/:recipeId/:commentId/edit-comment', editComment)
    app.delete('/recipes/comment/:userId/:recipeId/:commentId/delete-comment', deleteComment)
}