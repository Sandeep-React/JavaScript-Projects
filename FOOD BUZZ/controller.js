// https://forkify-api.herokuapp.com/v2

//API key
//9c212eec-a3fe-4d83-bfe5-b69768886469



import { getJSON } from "./config/config.js"
import { API_URL } from "./helpers/helpers.js"
import { AllRecieView } from "./MVC/AllRecipeView.js"
import {  getAllData } from "./MVC/MyModel.js"
import { storeReciepeData } from "./MVC/MyModel.js "
import { OneRecipeView } from "./MVC/OneRecipeView.js"
import { allData } from "./MVC/MyModel.js"
import { paginationData } from "./MVC/MyModel.js"
import { MyPaginationView } from "./MVC/MyPaginationView.js"
import { ServingsView } from "./MVC/ServingsView.js"

const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")

searchBtn.addEventListener("click", ()=>{
    getRecipesData()
})

async function getRecipesData()
{
    try{
    const searchItem = searchInput.value

    await getAllData(searchItem)
        const arv = new AllRecieView()
            //  arv.render(allData.allRecipeData)
            arv.render(paginationData(10))

            const mpv = new MyPaginationView
            mpv.render(allData)

        
    }
    catch(e){
        alert(e)
    }
}

// getRecipesData()

async function loadParticularRecipe() // Subscriber
{
    const hashId = window.location.hash.slice(1)
    // console.log(hashId)
   
   await storeReciepeData(hashId)

   const rv = new OneRecipeView()
   rv.render(allData.allRecipeData)
}

loadParticularRecipe()

function callHashChangeEventHandler()
{
    const r = new OneRecipeView()
    r.hashChangeEventHandler(loadParticularRecipe)
}

callHashChangeEventHandler()

function controlPagination(no){
    const arv = new AllRecieView()
    arv.render(paginationData(no))
    const mpv = new MyPaginationView
    mpv.render(allData)
}

function callIt(){
    const view = new MyPaginationView()
    view.getPageNumberFromButton(controlPagination)

}

callIt()

function servings(){
 const sv = new ServingsView()
 sv.render()
}

servings()
  

// window.addEventListener("hashchange", loadParticularRecipe) 


// https://forkify-api.herokuapp.com/api/v2/recipes/:664c8f193e7aa067e94e8706

/* 
Publisher - subscriber design pattern

Publisher ----> function --> that will basically hold the code --- hashChangeEventHandler function
Subscriber ---> function --> that will be called when the event occurs  -- oadParticularRecipe function
*/