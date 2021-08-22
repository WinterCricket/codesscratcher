
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
const users = [
{name: "Bjoork"},
{name: "Flannigan"},
{name: "Recotor"}

]
let user = ""
for(let i = 0; i < users.length; i++){
    if(users[i].name === "Flannigan" || users[i].name === "Recotor"){
        
        user += `<li>
        ${users[i].name}
        </li>`
}
}
ecmaEl.innerHTML = user