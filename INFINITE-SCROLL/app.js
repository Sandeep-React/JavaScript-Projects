/* 

Access Key
Jhg45wbjlt-9FIA8B3hzHueL9oKAmiKb7j8c5aBg63Y

Secret key
zWqn63M8xicFNABq83q3TDbwZPMma6FZgRNIyLc1_KI

*/

async function getImages() {
    const response = await fetch("https://api.unsplash.com/photos/?client_id=Jhg45wbjlt-9FIA8B3hzHueL9oKAmiKb7j8c5aBg63Y")
    const imagesData = await response.json()
    console.log(imagesData)

    imagesData.map(function(i){
        console.log(i.urls.full)
    })
}

getImages()