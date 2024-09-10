const myForm = document.getElementById("my-form")
const myPassword = document.getElementById("password")
const myConfirmPassword = document.getElementById("confirmpassword")
const myHesitate = document.getElementById("hesitate")

isPasswordMatched = false

myForm.addEventListener("submit", function(event){

    event.preventDefault()

    if(myPassword.value == myConfirmPassword.value){
        isPasswordMatched = true
        myHesitate.innerText = "PASSWORD'S MATCH"
    }
    else{
        isPasswordMatched = false
        myHesitate.innerText = "PASSWORD'S DON'T MATCH"
    }
})