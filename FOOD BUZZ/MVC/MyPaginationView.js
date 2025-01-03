

 export class MyPaginationView
{
    paginationData
    render(data){
        // console.log(data)
        this.data = data
        this.paginationData = document.getElementById("pagination")
        this.paginationLogic()
    }

    paginationLogic(){
        // console.log(this.data)

        const recipeLength =this.data.allRecipeData.length
        const recipePerPage = this.data.dataPerPage

        // console.log(recipeLength, recipePerPage)

        const numberOfPages = Math.ceil(recipeLength / recipePerPage)
        console.log(numberOfPages)
    }

}