import { anotherRecipeObject } from "./MyModel.js"
export class ServingsView
{
    rightContainer

    render(){
        this.rightContainer = document.getElementById("right-container")
        this.handleServings()
    }
    
    handleServings(){
        this.rightContainer.addEventListener("click", function(e){
        this.rightContainer = document.getElementById("right-container")

            // console.log(e.target.innerText)
            const btnName = e.target.innerText

            if(btnName == "INCREASE"){
                const completeDate = anotherRecipeObject.recipeObject
                let myServings = completeDate.servings
                anotherRecipeObject.recipeObject.servings = myServings + 1
                // console.log(anotherRecipeObject.recipeObject.servings)

                anotherRecipeObject.recipeObject.ingredients.map(function(i){
                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                
                const RecievedData = anotherRecipeObject.recipeObject
                this.rightContainer.innerText=""
                return this.rightContainer.insertAdjacentHTML("afterbegin", `<div class="right-food-container">
                <img class = "right-image" src="${RecievedData.imageUrl}" alt="">
                <h2 class = "right-title">Title: ${RecievedData.title}</h2>
                <h3 class = "right-publisher">Publisher: ${RecievedData.publisher}</h3>
                <h3 class = "right-servings">Servings: ${RecievedData.servings}</h3>
                <button id = "inc">INCREASE</button>
                <button id = "dec">DECREASE</button>
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
        )}
            else if(btnName == "DECREASE"){
                
                const completeDate = anotherRecipeObject.recipeObject
                let myServings = completeDate.servings
                anotherRecipeObject.recipeObject.servings = myServings - 1
                // console.log(anotherRecipeObject.recipeObject.servings)

                anotherRecipeObject.recipeObject.ingredients.map(function(i){
                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                
                const RecievedData = anotherRecipeObject.recipeObject
                this.rightContainer.innerText=""
                return this.rightContainer.insertAdjacentHTML("afterbegin", `<div class="right-food-container">
                <img class = "right-image" src="${RecievedData.imageUrl}" alt="">
                <h2 class = "right-title">Title: ${RecievedData.title}</h2>
                <h3 class = "right-publisher">Publisher: ${RecievedData.publisher}</h3>
                <h3 class = "right-servings">Servings: ${RecievedData.servings}</h3>
                <button id = "inc">INCREASE</button>
                <button id = "dec">DECREASE</button>
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
                
        )}

        })
    }

}