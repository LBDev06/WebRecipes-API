import { InMemoryUserRepository } from "../../../../repositories/in-memory-repository/in-memory-user-repository";
import { InMemoryRecipeRepository } from "../../../../repositories/in-memory-repository/in-memory-recipe-repository";
import { describe, expect, it, beforeEach } from "vitest";
import { randomUUID } from "node:crypto";
import { CreateFavoriteUseCase } from "../create-favorite";
import { InMemoryFavoriteRepository } from "../../../../repositories/in-memory-repository/in-memory-favorite-repository";

let usersRepository: InMemoryUserRepository
let recipeRepository: InMemoryRecipeRepository
let favoriteRepository: InMemoryFavoriteRepository
let sut: CreateFavoriteUseCase
 
describe('Create Recipe Use Case.', ()=>{
    beforeEach(()=>{
        usersRepository = new InMemoryUserRepository()
        recipeRepository = new InMemoryRecipeRepository()
        favoriteRepository = new InMemoryFavoriteRepository()
        sut = new CreateFavoriteUseCase(recipeRepository, favoriteRepository)
    })
   
    it('should be able add the recipe to favorites.', async()=>{

         const user = await usersRepository.create({
              name:'Alex',
              email:'exampleOne@gmail.com',
             password:'2597252'
         })
        
         const recipe  = await recipeRepository.create({
           recipe_title:'teste',
           description:'descricao',
           recipe_image:'imagem da receita',
           cook_time:'10min',
           servings:'4',
           ingredients:[
          "3 cenouras médias",
          "3 ovos",
          "1 xícara de óleo",
          "2 xícaras de farinha de trigo",
          "2 xícaras de açúcar",
          "1 colher de sopa de fermento"
          ],
         cook_instructions:[
         "Bata as cenouras, os ovos e o óleo no liquidificador.",
         "Misture com a farinha, açúcar e fermento.",
         "Leve ao forno preaquecido a 180°C por cerca de 40 minutos.",
         "Prepare a cobertura de chocolate e jogue por cima."
         ],
         userId: user.id
       })

       const createLike = await sut.create({
        userId:user.id,
        recipesId:recipe.id
      })
        
      expect(createLike.favorite.userId).toBe(user.id)
      expect(createLike.favorite.recipesId).toBe(recipe.id)
    })

    it('should not be able to add favorite with invalid userId or recipeId', async()=>{
        
      await expect(sut.create({
        userId:randomUUID(),
        recipesId:randomUUID()
      })).rejects.toBeInstanceOf(Error)
    })

})