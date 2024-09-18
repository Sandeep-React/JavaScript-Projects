//Storing/handling the data

import { getJSON } from "../config/config.js"
import { API_URL } from "../helpers/helpers.js"


export const anotherRecipeObject = {
    recipeObject: { }
}

export async function storeReciepeData(id){
   const recipeData = await getJSON(`${API_URL}/${id}`)
    // const response = await fetch()
    // const recipeData = await response.json()
    // console.log(recipeData)

    anotherRecipeObject.recipeObject = {
        publisher: recipeData.data.recipe.publisher,
        imageUrl: recipeData.data.recipe.image_url,
        title: recipeData.data.recipe.title,
        servings: recipeData.data.recipe.servings,
        cookingTime: recipeData.data.recipe.cooking_time,
        ingredients: recipeData.data.recipe.ingredients
    }

    // console.log(anotherRecipeObject)
}