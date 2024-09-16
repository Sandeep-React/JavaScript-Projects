// https://forkify-api.herokuapp.com/v2

// Example URL: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>

/* 
API key
9c212eec-a3fe-4d83-bfe5-b69768886469
*/

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=9c212eec-a3fe-4d83-bfe5-b69768886469

const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
const rightContainer = document.getElementById("right-container")

searchBtn.addEventListener("click", ()=>{
    // getRecipesData()
})

async function getRecipesData()
{
    try{
    const searchItem = searchInput.value
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=9c212eec-a3fe-4d83-bfe5-b69768886469`)
    const recipesData = await response.json()
    const recpieArray = recipesData.data.recipes
    recpieArray.map(function(i){
    //   console.log(i)
   
    const myImageUrl =i.image_url
    const myPublisher = i.publisher
    const myTitle = i.title
    const myId = i.id
        return leftContainer.insertAdjacentHTML("afterbegin",

            `<a href="#"><div class="left-food-container">
        <img src="${myImageUrl}" id="myimage">
        <h2 id = "mypublisher">${myPublisher}</h2>
        <h3 id ="mytitle">${myTitle}</h3>
       </div></a>`
        
        )
    })
    }
    catch(e){
        alert(e)
    }
}

// getRecipesData()

async function loadParticularRecipe(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8357")
    const recipeData = await response.json()
    console.log(recipeData)

    const recipeObject = {
        publisher: recipeData.data.recipe.publisher,
        imageUrl: recipeData.data.recipe.image_url,
        title: recipeData.data.recipe.title,
        servings: recipeData.data.recipe.servings,
        cookingTime: recipeData.data.recipe.cooking_time,
        ingredients: recipeData.data.recipe.ingredients
    }

    console.log(recipeObject.ingredients)

    rightContainer.innerText =""

   const rightData = `<div class="right-food-container">
    <img class = "right-image" src="${recipeObject.imageUrl}" alt="">
    <h2 class = "right-title">Title: ${recipeObject.title}</h2>
    <h3 class = "right-publisher">Publisher: ${recipeObject.publisher}</h3>
    <h3 class = "right-servings">Servings: ${recipeObject.servings}</h3>
    <h3 class = "right-cooking-time">Cooking Time: ${recipeObject.cookingTime}</h3>

    <div class = "ingredients">
      ${recipeObject.ingredients.map(function(i){
        console.log(i)
            return `<div>
                <span>${i.description}</span> --
                <span>${i.quantity}</span>
                <span>${i.unit}</span>
            </div>`
      }).join("")}
    </div>

</div>`

    rightContainer.insertAdjacentHTML("afterbegin", rightData)
    
}

loadParticularRecipe()

// https://forkify-api.herokuapp.com/api/v2/recipes/:664c8f193e7aa067e94e8706