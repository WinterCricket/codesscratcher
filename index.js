
let domEl = document.getElementById("dom-el")

const imgs = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"

]

function renderImage(){

let imageItem = ""
for(let i = 0; i < imgs.length; i++){
    imageItem += `
       <img src=" ${imgs[i]}" alt="">

    `
}


domEl.innerHTML = imageItem
}
renderImage()