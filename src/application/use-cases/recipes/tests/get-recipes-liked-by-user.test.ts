import { describe, it, beforeEach, expect } from 'vitest'
import { randomUUID } from 'node:crypto'
import { InMemoryRecipeRepository } from '../../../../repositories/in-memory-repository/in-memory-recipe-repository'

describe('Get Liked Recipes By User.', () => {
  let recipeRepository: InMemoryRecipeRepository

  beforeEach(() => {
    recipeRepository = new InMemoryRecipeRepository()
  })

  it('should return recipes liked by user', async () => {
    const user = {
      id: randomUUID()
    }

    const recipe = await recipeRepository.create({
      recipe_title: 'Bolo',
      description: 'descricao',
      recipe_image: 'img',
      cook_time: '10min',
      servings: '4',
      ingredients: [],
      cook_instructions: [],
      userId: user.id
    })

    recipeRepository.likes.push({
        userId: user.id,
        recipesId: recipe.id,
    })

    const result = await recipeRepository.findManyRecipesByLike({userId: user.id})

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(recipe.id)
  })
})
