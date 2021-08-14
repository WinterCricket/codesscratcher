


const domEl = document.getElementById("dom-el")

function getFirst(arr){
    let first = arr[0]
    first = first.toString()
    domEl.textContent = first

}

getFirst([4,7,8])

