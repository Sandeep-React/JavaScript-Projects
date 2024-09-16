// https://forkify-api.herokuapp.com/v2

// Example URL: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>

/* 
API key
9c212eec-a3fe-4d83-bfe5-b69768886469
*/

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=9c212eec-a3fe-4d83-bfe5-b69768886469

const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")

searchBtn.addEventListener("click", ()=>{
    getRecipesData()
})

async function getRecipesData()
{
    try{
    const searchItem = searchInput.value
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=9c212eec-a3fe-4d83-bfe5-b69768886469`)
    const recipesData = await response.json()
    const recpieArray = recipesData.data.recipes
    recpieArray.map(function(i){
        console.log(i)
    })
    }
    catch(e){
        alert(e)
    }
}

getRecipesData()