//Storing/handling the data

import { getJSON } from "../config/config.js"
import { API_URL } from "../helpers/helpers.js"



export const anotherRecipeObject = {
    recipeObject: { }
}

export async function storeReciepeData(id){
   const recipeData = await getJSON(`${API_URL}/${id}`)
    
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

export const allData = {
    allRecipeData: [],
    page: 1,
    dataPerPage: 10
}

export async function getAllData(searchItem) {
    
    const recipesData = await getJSON(`${API_URL}?search=${searchItem}&key=9c212eec-a3fe-4d83-bfe5-b69768886469`)
    const recpieArray = recipesData.data.recipes
    allData.allRecipeData = recpieArray
    // console.log(allData)
}

export function paginationData(page = allData.page){
    allData.page =page
    const start = (page -1)*allData.dataPerPage // start =10
    const stop = page * allData.dataPerPage//stop =20
    return allData.allRecipeData.slice(start, stop)
}