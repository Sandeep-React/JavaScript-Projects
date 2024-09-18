import { anotherRecipeObject } from "./MyModel.js";


export class OneRecipeView{

  rightContainer;
  rightData;

  render()
  {
     this.rightContainer = document.getElementById("right-container")
     this.clear()
    //  console.log(anotherRecipeObject.recipeObject)
     let collectedData = anotherRecipeObject.recipeObject
     this.rightData = this.actualLogic(collectedData)
     this.addDataToContainer()
    }
    
    clear(){
    this.rightContainer.innerText =""

  }

  actualLogic(RecievedData){
    // console.log(RecievedData)
    return `<div class="right-food-container">
     <img class = "right-image" src="${RecievedData.imageUrl}" alt="">
     <h2 class = "right-title">Title: ${RecievedData.title}</h2>
     <h3 class = "right-publisher">Publisher: ${RecievedData.publisher}</h3>
     <h3 class = "right-servings">Servings: ${RecievedData.servings}</h3>
     <h3 class = "right-cooking-time">Cooking Time: ${RecievedData.cookingTime}</h3>
 
     <div class = "ingredients">
       ${RecievedData.ingredients.map(function(i){
         // console.log(i)
             return `<div>
                 <span>${i.description}</span> --
                 <span>${i.quantity}</span>
                 <span>${i.unit}</span>
             </div>`
       }).join("")}
     </div>
 
 </div>`
  }

  addDataToContainer(){
    this.rightContainer.insertAdjacentHTML("afterbegin", this.rightData)
  }


  //
  hashChangeEventHandler(data) // data = loadParticularRecipe  ----> Publisher
  {
    window.addEventListener("hashchange", data) 
  }

  handleError(){
    this.rightContainer = document.getElementById("right-container")
    this.rightContainer.innerText = ""
    this.rightContainer.innerText = "Please enter a valid id!"
  }
}