

export class AllRecieView
{
    leftContainer
    render (data) // data = all data.allRecipeData
    {
        this.leftContainer = document.getElementById("left-container")
        this.getRecipeDataView(data)
    }

    getRecipeDataView(recpieArray){

    //   const recpieArray = allData.allRecipeData
    //    console.log(recpieArray)

        recpieArray.map((i) =>{

    
            const myImageUrl =i.image_url
            const myPublisher = i.publisher
            const myTitle = i.title
            const myId = i.id

                return this.leftContainer.insertAdjacentHTML("afterbegin",
    
               `<a href="#${myId}">
                    <div class="left-food-container">
                        <img src="${myImageUrl}" id="myimage">
                        <h2 id = "mypublisher">${myPublisher}</h2>
                        <h3 id ="mytitle">${myTitle}</h3>
                    </div>
                </a>`
                
                )
            })
    }
}