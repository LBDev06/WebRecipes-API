import { FastifyInstance } from "fastify";
import { createFavorite } from "../controllers/favorite/create-favorite";
import { deleteFavorite } from "../controllers/favorite/delete-favorite-recipe";

export function favoriteRoutes(app: FastifyInstance){
  app.post('/recipes/favorite/create-favorite', createFavorite)
  app.delete('/recipes/favorite/:favoriteId/:userId/:recipeId/delete', deleteFavorite)

}