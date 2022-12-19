import { startPage } from "../data/storyline.js"
import { nextPage } from "../data/storyline.js"


// * Constants:



// * Variables:

let page = []


// * Chached Element References:

const messageEl = document.getElementById('message')
// const optOneP = document.getElementById('option-one')
// const optTwoP = document.getElementById('option-two')
// const containerOne = document.getElementById('container-one')
// const containerTwo = document.getElementById('container-two')
const containerBlock = document.getElementById('container-block')


// * Event Listeners:

// containerOne.addEventListener('click', console.log('containerOne clicked'))
containerBlock.addEventListener('click', handleClick)

// * Functions:

function init() {
    generateContent()
    // let nextPageArr = page[0].next
    // console.log(nextPageArr)
    render()
    // messageEl.textContent = page[0].message
    // optOneP.textContent = page[0].optOne
    // optTwoP.textContent = page[0].optTwo
}

init()

function generateContent() {
    const currentPage = startPage()
    page.push(currentPage)
}

function render() {
    containerBlock.innerHTML = ''
    appendOptions()
    updateMessage()
}

function appendOptions() { 
    let containerOne = document.createElement('div')
    containerOne.className = 'container'
    containerOne.innerHTML = 
        `<div id="container-one" class="container">
            <h2>Do You:</h2>
            <p id="option-one" class="option-text">${page[page.length -1].optOne}</p>
        </div>`
    containerBlock.appendChild(containerOne)
    if (page[page.length -1].optTwo !== null) {
        let containerTwo = document.createElement('div')
        containerTwo.className = 'container'
        containerTwo.innerHTML = 
            `<div id="container-two" class="container">
                <h2>Do You:</h2>
                <p id="option-two" class="option-text">${page[page.length -1].optTwo}</p>
            </div>`
        containerBlock.appendChild(containerTwo)
    }
}

function updateMessage() {
    messageEl.textContent = page[page.length -1].message
}

function handleClick(evt) {
    if (evt.target.id === 'container-one') {
        console.log('you clicked on container-one')
        // console.log(nextPage(page[0].next[0]))
        // page = nextPage(page[page.length -1].next[0])
        page.push(nextPage(page[page.length -1].next[0]))
        console.log(page)
    } else if (evt.target.id === 'container-two') {
        console.log('you clicked on container-two')
        // page = nextPage(page[page.length -1].next[1])
        page.push(nextPage(page[page.length -1].next[1]))
        console.log(page)
    }
    render()
}
// console.log(page[0].next)