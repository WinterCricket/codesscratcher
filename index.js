
let domEl = document.getElementById("dom-el")
let listEl = document.getElementById("list-el")
let ecmaEl = document.getElementById("ecma-el")
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
const numbers = [1,2,3,4]

let doubleNumbers = []

numbers.forEach(function(number){
    let flee = number *2
    doubleNumbers.push(flee)
})

ecmaEl.textContent = doubleNumbers