


const domEl = document.getElementById("dom-el")

const myCourses = ["Creative Writing for Geniuses", "Coding for Literary Minds ", "UI Design Fundamentals "]


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


myCourses.push("Claudius was a Wanker!")

localStorage.setItem("myCourses", JSON.stringify(myCourses))
listCourses(myCourses)


// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     render(myLeads)
// })