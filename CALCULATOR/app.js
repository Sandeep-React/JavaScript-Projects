const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")
const allClearBtn = document.getElementById("all-clear")
const equalBtn = document.getElementById("equal")


function displayResults(data){
    
    if(display.innerText === "0"){
        display.innerText = data
    }else{
        display.innerText = display.innerText + data
    }
    
}

function addDecimal(){
    //Decimal must be entered only once
    if(!display.innerText.includes(".")){
        display.innerText = `${display.innerText}.`
    }
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
            
           addDecimal()

        })
    }
})

allClearBtn .addEventListener("click", function(){
    display.innerText = "0"
})

equalBtn.addEventListener("click", function(){
    display.innerText = eval(display.innerText)
})