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
containerBlock.addEventListener('click', restartGame)

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
    if (page[page.length -1].optOne !== null || page[page.length -1].optOne !== 0) {
        let containerOne = document.createElement('div')
        containerOne.className = 'container'
        containerOne.innerHTML = 
            `<div id="container-one" class="container">
                <h2>Do You:</h2>
                <p id="option-one" class="option-text">${page[page.length -1].optOne}</p>
            </div>`
        containerBlock.appendChild(containerOne)
    }
    if (page[page.length -1].optOne === null) {
        let containerOne = document.createElement('div')
        containerOne.className = 'container'
        containerOne.innerHTML = 
            `<div id="dead-container" class="container">
                <h2>You Died! Do you want to play again?</h2>
                <button class='restart-buttons' id='yes-button'>Yes</button>
                <button class= 'restart-buttons' id='no-button'>No</button>
            </div>`
        containerBlock.appendChild(containerOne)
    }
    if (page[page.length -1].optOne === 0) {
        containerBlock.innerHTML = ''
        let containerOne = document.createElement('div')
        containerOne.className = 'container'
        containerOne.innerHTML = 
            `<div id="dead-container" class="container">
                <h2>Would you like to go back?</h2>
                <button class='restart-buttons' id='yes-button'>Yes</button>
                <button class= 'restart-buttons' id='no-button'>No</button>
            </div>`
        containerBlock.appendChild(containerOne)
    }
    if (page[page.length -1].optTwo !== undefined) {
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
function restartGame(evt) {
    if (evt.target.id === 'yes-button') {
        init()
    }
    if (evt.target.id === 'no-button') {
        containerBlock.innerHTML = ''
        messageEl.textContent = "You'll never know the adventures you missed out on!"
    }
}
// console.log(page[0].next)