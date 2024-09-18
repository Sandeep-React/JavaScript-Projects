// functions

import { OneRecipeView } from "../MVC/OneRecipeView.js"

 export async function getJSON(url){
   const response = await fetch(url)
   const data = await response.json()
    if(data.status === "success")
    {
        return data
    } else if(data.status == "fail") {

        const rv = new OneRecipeView()
        rv.handleError()

    }

   return data
}