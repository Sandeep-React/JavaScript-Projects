/* 

Access Key
Jhg45wbjlt-9FIA8B3hzHueL9oKAmiKb7j8c5aBg63Y

Secret key
zWqn63M8xicFNABq83q3TDbwZPMma6FZgRNIyLc1_KI

*/
const imageContainer = document.getElementById("imagecontainer")

async function getImages() {
    const response = await fetch("https://api.unsplash.com/photos/?client_id=Jhg45wbjlt-9FIA8B3hzHueL9oKAmiKb7j8c5aBg63Y")
    const imagesData = await response.json()
    // console.log(imagesData)

    imagesData.map(function(i){
        let imageURL = i.urls.full

        const myImageElement = document.createElement("img")
        // console.log(myImageElement)
        myImageElement.setAttribute('src', imageURL)
        // console.log(myImageElement)
        imageContainer.append(myImageElement)
    })
}

getImages()

// window object refers the entire window of the browser.
window.addEventListener("scroll", function(){

    // console.log("hi")
    
    // const data = document.documentElement // gives the complete details of the html elements.
    // console.log(data)

    let myClientHeight = document.documentElement.clientHeight  // Height of the screen that we see
    let myScrollHeight = document.documentElement.scrollHeight  // total height including scroll
    let myScrollTop = document.documentElement.scrollTop        // distance moved on scrolling 

    // console.log(myClientHeight, myScrollHeight, myScrollTop)

    if(myClientHeight + myScrollTop >= myScrollHeight){

        getImages()
    }

})