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
        
        const data = {
            fullname: event.target[0].value,
            phonenumber: event.target[1].value,
            email: event.target[2].value,
            url: event.target[3].value,
            password: event.target[4].value,
            confirmpassword: event.target[5].value,
        }

        console.log(data)
    }
    else{
        isPasswordMatched = false
        myHesitate.innerText = "PASSWORD'S DON'T MATCH"
    }
})