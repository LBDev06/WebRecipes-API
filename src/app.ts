import fastify from "fastify";
import { userRoutes } from "./http/routes/user-routes";
import { recipeRoutes } from "./http/routes/recipe-routes";
import { likeRoutes } from "./http/routes/like-routes";
import { favoriteRoutes } from "./http/routes/favorite-routes";
import { commentRoutes } from "./http/routes/comment-routes";


export const app = fastify()

app.register(userRoutes)
app.register(recipeRoutes)
app.register(likeRoutes)
app.register(favoriteRoutes)
app.register(commentRoutes)