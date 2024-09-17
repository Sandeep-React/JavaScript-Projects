//Storing/handling the data

export const anotherRecipeObject = {
    recipeObject: { }
}

export async function storeReciepeData(id){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const recipeData = await response.json()
    // console.log(recipeData)

    anotherRecipeObject.recipeObject = {
        publisher: recipeData.data.recipe.publisher,
        imageUrl: recipeData.data.recipe.image_url,
        title: recipeData.data.recipe.title,
        servings: recipeData.data.recipe.servings,
        cookingTime: recipeData.data.recipe.cooking_time,
        ingredients: recipeData.data.recipe.ingredients
    }

    console.log(anotherRecipeObject)
}