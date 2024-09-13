const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")


function displayResults(data){
    console.log(data)
    display.innerText = data
}



// console.log(buttons)

buttons.forEach(function(btn){
    // console.log(btn)
    
    if(btn.classList.length == 0){
        // console.log(btn)
        // console.log(btn.innerText)
        btn.addEventListener("click", function(){
            
            // display.innerText = btn.innerText
            displayResults(btn.innerText)

        })
    }
    else if(btn.classList.contains("operators"))
    {
        btn.addEventListener("click", function(){
            
            // display.innerText = btn.innerText
            displayResults(btn.innerText)

        })
    }
    else if(btn.classList.contains("decimal"))
    {
        btn.addEventListener("click", function(){
            
            // display.innerText = btn.innerText
            displayResults(btn.innerText)

        })
    }
})