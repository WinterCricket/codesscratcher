


const domEl = document.getElementById("dom-el")

function adder(a, b){
    let c = a + b
    c = c.toString()
    domEl.textContent = c
    
    
}

adder(33, 19)