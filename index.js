
const domEl = document.getElementById("dom-el")
const listEl = document.getElementById("list-el")
const ecmaEl = document.getElementById("ecma-el")
const imgs = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",


]

function renderImage(){

let imageItem = ""
for(let i = 0; i < imgs.length; i++){
    imageItem += `
       <img class="team-image" src=" ${imgs[i]}" alt="photos of models">

    `
}


domEl.innerHTML = imageItem
}
renderImage(imgs.unshift("images/image4.png"))



// let numbers = [1, 2, 3, 8]
// // function renderColors(){
// let sum = 0

// function adder(number){
//     sum += number
// }

// numbers.forEach(adder)
const products = [

    {product: "ice cream", type: "dairy"},

    {product: "steak", type: "meat"},

    {product: "blueberries", type: "fruit"},

    {product: "potatoes", type: "vegetable"},

    {product: "apples", type: "fruit"}

]

let filteredProducts = []


    
for (let i = 0; i < products.length; i++){
    if( products[i].type === "fruit"){
        filteredProducts.push(products[i].product)
    
        
}
  

  }      

 ecmaEl.textContent = filteredProducts
