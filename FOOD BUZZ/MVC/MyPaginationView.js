

 export class MyPaginationView
{
    paginationData
    left
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
        // console.log(numberOfPages)
        const currentPage = this.data.page
        
        if(currentPage === 1 && numberOfPages > 1)
        {
            // console.log("I'm in the 1st page and some other pages are available")
            this.paginationData.innerText=""
            return this.paginationData.insertAdjacentHTML("afterbegin",`
                <button class="btn--inline next">
                <span>Page${currentPage + 1}</span>
                </button>`
                
            )}
            if(currentPage === numberOfPages && numberOfPages > 1)
                {
                    // console.log("I'm in the 1st page and some other pages are available")
                    this.paginationData.innerText=""
                    return this.paginationData.insertAdjacentHTML("afterbegin",`
                        <button class="btn--inline previous">
                        <span>Page${currentPage - 1}</span>
                        </button>`
                        
                    )}
                    
                    if(currentPage < numberOfPages)
                        {
                            // console.log("There are other pages that are available")
            this.paginationData.innerText=""
            return this.paginationData.insertAdjacentHTML("afterbegin",`
            <button class="btn--inline previous">
                <span>Page${currentPage - 1}</span>
            </button>

            <button class="btn--inline next">
            <span>Page${currentPage + 1}</span>
            </button>
            `
        )}
        else
        {

            // console.log("I'm in the first page and some other pages are not available")
            this.paginationData.innerText=""
            return this.paginationData.insertAdjacentHTML("afterbegin",   `
            <button class="btn--inline next">
                <span>Page${currentPage}</span>
            </button>`

        
        )}
    }
    
    getPageNumberFromButton(handler)
    {
        this.paginationData = document.getElementById("pagination")
        
        this.paginationData.addEventListener("click", function(e)
        {
            this.left =document.getElementById("left-container")
            this.left.innerText = ""
            const pageNo = Number(e.target.innerText.slice(4))
            handler(pageNo)
    })
    }
}