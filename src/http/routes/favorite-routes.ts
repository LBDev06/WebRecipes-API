import { FastifyInstance } from "fastify";
import { favoriteRecipe } from "../controllers/favorite/favorite-recipe";
import { unfavoriteRecipe } from "../controllers/favorite/unfavorite-recipe";
import { verifyJwt } from "../middleware/verify-jwt";
import { loginRequired } from "../middleware/login-required";

export function favoriteRoutes(app: FastifyInstance){
  app.post('/recipes/:recipesId/favorite', {onRequest: [verifyJwt, loginRequired]}, favoriteRecipe)
  app.delete('/recipes/:recipesId/unfavorite', {onRequest: [verifyJwt, loginRequired]}, unfavoriteRecipe)
}