
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
const dancers = [
  { name: "Sid", age: 17 },
  { name: "Baggy", age: 21 },
  { name:"Irish", age: 67 }
];
let legal =



dancers.every(function(dancer){
    return dancer.age > 20
})

//ecmaEl.textContent = legal

let ages = []
function findYoungest(){
dancers.forEach(function(dancer){
    return ages.push(dancer.age)
})
let context = ages.sort(function(a,b){return a-b})


ecmaEl.textContent = context[0]
}
findYoungest()

