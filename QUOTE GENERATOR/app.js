// https://zenquotes.io/api/random
// https://api.quotable.io/random // This API is down 



const myButton = document.getElementById('btn')
const myQuote = document.getElementById("myquote")
const myAuthor = document.getElementById("myauthor")
const mycopy = document.getElementById("copy")
const myVolume = document.getElementById("volume")
const myContainer = document.getElementById("container")
const myLoader = document.getElementById("loader")

// Container is visible --> loader should not be visible
function first(){
    myContainer.hidden = false
    myLoader.hidden = true
}

function second(){
    myLoader.hidden = false
    myContainer.hidden = true
}

first()
myButton.addEventListener("click", async function(){
    
    second()
    const response =  await fetch("https://api.quotable.io/random") // This API is down
    let quotes = await response.json()
    
    console.log(quotes)

    myQuote.innerText = quotes.content 
    myAuthor.innerText = quotes.author 
    first()
})


// copy function
mycopy.addEventListener("click", function(){

    navigator.clipboard.writeText(myQuote.innerText)
})

//Volume function -- text to speech
myVolume.addEventListener("click", function(){
    let speech = new SpeechSynthesisUtterance(myQuote.innerText)
    speechSynthesis.speak(speech)
})

// Loader is visible ---> container should not be visible 