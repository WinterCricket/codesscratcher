


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage

const description = "countries with the best health care"
const array = ["Norway", "Denmark", "Netherlands"]

function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length -1
    for(let i=0; i <arr.length; i++){
        if(i === lastIndex){
            baseString += arr[i]
        }else{
        baseString+= arr[i]+", "
    }
    }
    domEl.textContent = baseString
    
}
generateSentence(description, array)