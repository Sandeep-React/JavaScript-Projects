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

            // console.log(e.target.innerText)
            const btnName = e.target.innerText

            if(btnName == "INCREASE"){
                console.log(anotherRecipeObject.recipeObject)
            }
            else if(btnName == "DECREASE"){
                
            }

        })
    }

}