// https://forkify-api.herokuapp.com/v2

//API key
//9c212eec-a3fe-4d83-bfe5-b69768886469



import { getJSON } from "./config/config.js"
import { API_URL } from "./helpers/helpers.js"
import { storeReciepeData } from "./MVC/MyModel.js "
import { OneRecipeView } from "./MVC/OneRecipeView.js"



const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")

searchBtn.addEventListener("click", ()=>{
    getRecipesData()
})

async function getRecipesData()
{
    try{
    const searchItem = searchInput.value
    const recipesData = await getJSON(`${API_URL}?search=${searchItem}&key=9c212eec-a3fe-4d83-bfe5-b69768886469`)
    // const response = await fetch(`${API_URL}?search=${searchItem}&key=9c212eec-a3fe-4d83-bfe5-b69768886469`)
    // const recipesData = await response.json()
    const recpieArray = recipesData.data.recipes
    recpieArray.map(function(i){
    //   console.log(i)
   
    const myImageUrl =i.image_url
    const myPublisher = i.publisher
    const myTitle = i.title
    const myId = i.id
        return leftContainer.insertAdjacentHTML("afterbegin",

            `<a href="#${myId}"><div class="left-food-container">
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
    const hashId = window.location.hash.slice(1)
    // console.log(hashId)
   
   await storeReciepeData(hashId)

   const rv = new OneRecipeView()
   rv.render()
}

loadParticularRecipe()

window.addEventListener("hashchange", loadParticularRecipe)

// https://forkify-api.herokuapp.com/api/v2/recipes/:664c8f193e7aa067e94e8706