import { InMemoryUserRepository } from "../../../../repositories/in-memory-repository/in-memory-user-repository";
import { InMemoryRecipeRepository } from "../../../../repositories/in-memory-repository/in-memory-recipe-repository";
import { describe, expect, it, beforeEach } from "vitest";
import { randomUUID } from "node:crypto";
import { EditRecipeUseCase } from "../edit-recipe";

let usersRepository: InMemoryUserRepository
let recipeRepository: InMemoryRecipeRepository
let sut: EditRecipeUseCase

describe('Create Recipe Use Case.', ()=>{
    beforeEach(()=>{
        usersRepository = new InMemoryUserRepository()
        recipeRepository = new InMemoryRecipeRepository()
        sut = new EditRecipeUseCase(recipeRepository)
    })
   
    it('should be able to register a new recipe.', async()=>{

      const user = await usersRepository.create({
            name:'Alex',
            email:'exampleOne@gmail.com',
            password:'2597252'
        })

         const recipe  = await recipeRepository.create({
           recipe_title:'Lasanha',
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
         userId:user.id
       })

            const  recipes  = await sut.execute({
                userId:user.id,
                recipeId:recipe.id,
                data:{
                    recipe_title:"Lasanha com queijo",
                    description:"Lasanha deliciosa com queijo"
                }
            })

            expect(recipes.updateRecipe?.recipe_title).toBe("Lasanha com queijo")
            expect(recipes.updateRecipe?.description).toBe("Lasanha deliciosa com queijo")
    })

    it('should not be able to register a new recipe with invalid userId or recipeId.', async()=>{
        await expect(
            sut.execute({
                userId:randomUUID(),
                recipeId:randomUUID(),
                data:{
                    recipe_title:"teste 2",
                    description:"descricao"
                }
            })
        ).rejects.instanceOf(Error)
    })
    
})