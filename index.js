
let domEl = document.getElementById("dom-el")
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

let colors = ["blue", "green", "red", "yellow"]
// function renderColors(){

function addToArray(item){
    colors.push(item)

    colors.forEach(function(color){
    
   ecmaEl.innerHTML += `<li> 
    Here's this color: ${color} 
    </li>`


})
}
//  let list = ""
// for (let j = 0; j < colors.length; j++){
//     list += `
//         <li> ${colors[j]} </li>
//     `

// }
// ecmaEl.innerHTML = list
// }
// renderColors()



 
addToArray("purple")
