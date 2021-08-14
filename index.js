


const domEl = document.getElementById("dom-el")

const myCourses = ["Creative Writing for Geniuses", "Coding for Literary Minds ", "UI Design Fundamentals "]
const yourCourses = ["Pucker Up: How to Succeed ", "Business Cycles ", "Make Artists Cry "]

function listCourses(arr){
    let listItems = ""
    for(let i =0; i < arr.length; i++){
        listItems += `

        <li>
            ${arr[i]}

        </li>

        `
       
    }
    domEl.innerHTML =listItems
}


listCourses(yourCourses)