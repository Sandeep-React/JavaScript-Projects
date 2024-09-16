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
    //   console.log(i)
   
    const myImageUrl =i.image_url
    const myPublisher = i.publisher
    const myTitle = i.title
        return leftContainer.insertAdjacentHTML("afterbegin",
        `<div class="left-food-container">
        <img src="${myImageUrl}" id="myimage">
        <h2 id = "mypublisher">${myPublisher}</h2>
        <h3 id ="mytitle">${myTitle}</h3>
       </div>`)

    })
    }
    catch(e){
        alert(e)
    }
}

getRecipesData()