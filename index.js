


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage

const description = "The countries with the best health care are "
const array = ["Norway ", "Denmark ", "Netherlands"]

function generateSentence(desc, arr){
    let sentence = ""
    let list = [].toString()
    for( let i = 0; i < arr.length; i++){
        list += arr[i]+", "
        //console.log(list)
        sentence = `
        ${desc} ${list}

        `
        console.log(sentence)
    }
    domEl.textContent = sentence
}

generateSentence(description, array)