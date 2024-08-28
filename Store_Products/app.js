// https://fakestoreapi.com/products

const myTitle = document.getElementById('title')
const myPrice = document.getElementById('price')
const myDescription = document.getElementById('description') 
const myBtn = document.getElementById('myBtn')


myBtn.addEventListener('click',async function(){

    const response = await fetch('https://fakestoreapi.com/products/1');
    const products = await  response.json()
    console.log(products)

    myTitle.innerText = `TITLE:  ${products.title}`
    myPrice.innerText = `PRICE: ${products.price}`
    myDescription.innerText = `DESCRIPTION: ${products.description}`

})
