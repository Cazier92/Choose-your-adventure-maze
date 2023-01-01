import { startPage } from "../data/storyline.js"
import { nextPage } from "../data/storyline.js"
import { instText } from "../data/storyline.js"
import { warnMsgText } from "../data/storyline.js"
import * as gameAudio from '../js/audio.js'
// import { treasureInit } from "./treasure-hunt.js"
import { relics } from "../data/game-items.js"
import { goldWinnings } from "../data/game-items.js"


// * Constants:
const timerAnimation = [
    {transform: 'rotate(0) scale(2)'},
    {transform: 'rotate(360deg) scale(0)'},
]
const timerAnimTiming = {
    duration: 1000,
    iterations: 1
}


// * Variables:

let page = []
let clickCount = 0
let timeLeft 
let recentPage 
let instDisplayed = false
let instructions
let onStartPage = true
let gold = 0
let treasureArr 


// * Chached Element References:

const messageEl = document.getElementById('message')
const containerBlock = document.getElementById('container-block')
const mainEl = document.querySelector('main')
const startBtn = document.getElementById('start-button')
const instBtn = document.getElementById('instruction-button')
const startBtnDiv = document.getElementById('start-btn-div')
// const hamburger = document.querySelector('.hamburger')
// const navMenu = document.querySelector('.nav-menu')



// * Event Listeners:

containerBlock.addEventListener('click', handleClick)
containerBlock.addEventListener('click', restartGame)
startBtn.addEventListener('click', init)
instBtn.addEventListener('click', displayInst)
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active')
//     navMenu.classList.toggle('active')
// })
// document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active')
//     navMenu.classList.remove('active')
// }))


// * Functions:

//* Functions to start page:

function displayInst() {
    if (instDisplayed === false) {
        instructions = document.createElement('div')
        instructions.className = 'special-container'
        instructions.id = 'instructions-container'
        instructions.innerHTML =
        `
        <h3>Hello Adventurer!</h3>
        <p>${instText}</p>
        `
        mainEl.appendChild(instructions)
        instDisplayed = true
    }
    else {
        mainEl.removeChild(instructions)
        instDisplayed = false
    }
}

function removeInst() {
    if (instDisplayed) {
        mainEl.removeChild(instructions)
        instDisplayed = false
    }
}

function removeStartPageBtns() {
    if (onStartPage) {
        mainEl.removeChild(startBtnDiv)
        onStartPage = false
    }
}

//* Create Game Menu:

function createMenu() {
    let gameMenu = document.createElement('header')
    gameMenu.innerHTML = 
    `
    <nav class="navbar">
        <ul class="nav-menu">
            <li class="nav-item" id='gold-menu'>Gold</li>
            <li class="nav-item" id='satchel'>Satchel</li>
            <li class="nav-item" id='treasure-hunt'>Dig For Treasure</li>
            <li class="nav-item" id="main-menu">Return to Main Menu</li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    `
    mainEl.insertBefore(gameMenu, mainEl.firstChild)
    const hamburger = document.querySelector('.hamburger')
    const navMenu = document.querySelector('.nav-menu')
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
    document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    }))
    menuOptions()
    
}

createMenu()

function menuOptions() {
    const returnToMain = document.getElementById('main-menu')
    returnToMain.addEventListener('click', warnMsg)
    const goldMenu = document.getElementById('gold-menu')
    goldMenu.addEventListener('click', displayGold)
    const treasureHunt = document.getElementById('treasure-hunt')
    treasureHunt.addEventListener('click', renderTreasureHunt)
}

function warnMsg() {
    containerBlock.innerHTML = ''
    let warning = document.createElement('div')
    warning.className = 'special-container'
    warning.id = 'warning-container'
    warning.innerHTML = 
    `
    <h3>Warning!</h3>
    <p>${warnMsgText}</p>
    <div id='warn-btn-div'>
    <button class='warning-button' id='return-btn'>Return</button>
    <a href='index.html'>
    <button class='warning-button' id='continue-btn'>Continue</button>
    </a>
    </div>
    `
    containerBlock.appendChild(warning)
    const continueBtn = document.getElementById('return-btn')
    continueBtn.addEventListener('click', render)
}

function displayGold() {
    containerBlock.innerHTML = ''
    let goldContainer = document.createElement('div')
    goldContainer.className = 'special-container'
    goldContainer.id = 'gold-container'
    goldContainer.innerHTML = 
    `
    <h3>Gold</h3>
    <p>You currently have: ${gold} coins!</p>
    <button class='close-button'>Close</button>
    `
    containerBlock.appendChild(goldContainer)
    let closeBtn = document.querySelector('.close-button')
    closeBtn.addEventListener('click', render)
}

function renderTreasureHunt() {
    mainEl.innerHTML = 
    `
    <h1>Maze Raider</h1>
    <h3 id="message"></h3> 
    <div id="instruction-button-div">
        <button class='start-screen-button' id='treasure-instructions'>Instructions</button>
    </div>
    <div class="wall-integrity" id="integrity-div">
        <p>Wall Integrity:</p>
        <p id="integrity-bar"></p>
    </div>
    <div class='special-container' id="game-board">
        
    </div>
    <a href="./index.html">Return to Main Menu</a>
    `
    const gameBoard = document.getElementById('game-board')
    const integrityBar = document.getElementById('integrity-bar')
    const returnLink = document.querySelector('a')
    const integrityDiv = document.getElementById('integrity-div')
    let integrityPercent = 60
    let timeLeftTreasureHunt
    gameBoard.addEventListener('click', play)
    function treasureInit() {
        createGameBoard()
        createTreasure()
    }
    treasureInit()
    
    function createGameBoard() {
        for (let i=0; i<25; i++) {
            let gameSq = document.createElement('div')
            gameSq.className = 'game-square'
            gameSq.id = `sq${i}`
            gameBoard.appendChild(gameSq)
        }
    }
    
    function createTreasure() {
        let sqNum = Math.floor(Math.random()*25)
        let treasureSq = document.getElementById(`sq${sqNum}`)
        treasureSq.style.backgroundColor = 'red'
        treasureSq.id = 'treasureSq'
    }
    
    function play(evt) {
        let treasureSq = document.getElementById('treasureSq')
        if (evt.target.id !== 'treasureSq') {
            integrityPercent -= 20
            integrityBar.style.width = `${integrityPercent}%`
            // return integrityPercent
        }
        if (integrityPercent === 0) {
            integrityDiv.innerHTML =
            `
            <p id='collapsing-p'>The wall is collapsing!</p>
            `
            gameBoard.style.animation = 'hinge'
            gameBoard.style.animationDuration = '2s'
            removeGameBoard()
            
        }
        if (evt.target.id === 'treasureSq') {

            treasureSq.innerHTML =
            `
            <img class='treasure-icons' src="../assets/images/gold-crown-coin-icon.png" alt="image of a gold coin">
            `
            // treasureSq.style.backgroundColor = ''
        }
        console.log(integrityPercent)
    }
    
    function removeGameBoard() {
            timeLeftTreasureHunt = 2
            let timer = setInterval(function() {
                timeLeftTreasureHunt -= 1;
                if (timeLeftTreasureHunt === 0) {
                    // gameBoard.className = ''
                    returnLink.innerHTML = ''
                    gameBoard.id = 'game-over-container'
                    gameBoard.innerHTML = 
                    `
                    <h1>Game Over</h1>
                    <a href="../index.html">Return to Main Menu</a>
                    `
                    clearInterval(timer)
                }
            }, 1000)
    }
}

//* Game logic functions:

function init() {
    removeStartPageBtns()
    removeInst()
    generateContent()
    render()
    // startBackgroundMusic()
    gameAudio.playBackgroundMusic()
    createMenu()
}


// init()

function generateContent() {
    const currentPage = startPage()
    page.push(currentPage)
    startPortalAudio()
}

function render() {
    containerBlock.innerHTML = ''
    appendOptions()
    updateMessage()
}

function appendOptions() { 
    if (typeof page[page.length -1].optOne === 'string') {
        optOneContent()
    }
    if (page[page.length -1].optOne === null) {
        dead()
    }
    if (page[page.length -1].optOne === undefined) {
        gameOver()
    }
    if (page[page.length -1].optOne === 0) {
        giveUp()
    }
    if (page[page.length -1].optOne === 1) {
        cliff()
    }
    if (page[page.length -1].optOne === 2) {
        boat()
    }
    if (page[page.length -1].optOne === 3) {
        portal()
    }
    if (page[page.length -1].optOne === 4) {
        fight()
    }
    if (typeof page[page.length -1].optTwo === 'string') {
        optTwoContent()
    }
}


function updateMessage() {
    messageEl.textContent = page[page.length -1].message
}

function handleClick(evt) {
    if (evt.target.id === 'container-one' || evt.target.id === 'option-one') {
        gameAudio.playOptOneAudio()
        page.push(nextPage(page[page.length -1].next[0]))
    } 
    if (evt.target.id === 'container-two' || evt. target.id === 'option-two') {
        gameAudio.playOptTwoAudio()
        page.push(nextPage(page[page.length -1].next[1]))
    }
    updateRecentPage()
    render()
    startPortalAudio()
    startDeadAudio()
    startGameOverMusic()
}

//* Function to edit most recent page:

function updateRecentPage() {
    recentPage = page[page.length -1].page
}


//* Functions to handle audio:

// function startBackgroundMusic() {
//     if (page[page.length -1].page === 0) {
//         const exploreContainer = document.getElementById('container-one')
//         exploreContainer.addEventListener('click', gameAudio.playBackgroundMusic)
//     }
// }


function startPortalAudio() {
    if (recentPage === 16 || recentPage === 24) {
        const portalContainer = document.getElementById('container-one')
        portalContainer.addEventListener('click', gameAudio.playPortalAudio)
    }
}

function startDeadAudio() {
    if (recentPage === 2 || recentPage === 5 || recentPage === 8 || recentPage === 15 || recentPage === 27) {
        gameAudio.playDeadSound()
    }
}

function startGameOverMusic() {
    if (recentPage === 3) {
        gameAudio.playGameOver()
    }
}


//* Functions to create standard containers:


function optOneContent() {
    let containerOne = document.createElement('div')
    containerOne.className = 'container' 
    containerOne.id = 'container-one'
    containerOne.innerHTML = 
        `
        <h2>Do You:</h2>
        <p id="option-one" class="option-text">${page[page.length -1].optOne}</p>
        `
    containerBlock.appendChild(containerOne)
}

function optTwoContent() {
    let containerTwo = document.createElement('div')
        containerTwo.className = 'container'
        containerTwo.id = 'container-two'
        containerTwo.innerHTML = 
            `
            <h2>Or Do You:</h2>
            <p id="option-two" class="option-text">${page[page.length -1].optTwo}</p>
            `
        containerBlock.appendChild(containerTwo)
}



//* Functions to create and handle special containers:


function restartGame(evt) {
    if (evt.target.id === 'yes-button') {
        gameAudio.stopDeadSound()
        init()
    }
    if (evt.target.id === 'no-button') {
        // containerBlock.innerHTML = ''
        // messageEl.textContent = "You'll never know the adventures you missed out on!"
        // let gameOverContainer = document.createElement('div')
        // gameOverContainer.className = 'special-container'
        // gameOverContainer.id = 'game-over-container'
        // gameOverContainer.innerHTML =
        // `
        // <h1>Game Over</h1>
        // <a href="https://bryce-cazier-maze.netlify.app/">Return to Main Menu</a>
        // `
        // mainEl.appendChild(gameOverContainer)
        gameAudio.stopDeadSound()
        gameOver()
        containerBlock.innerHTML = ''
    }
}


function climb() {
    clickCount ++
}

function cliff() {
    let cliffContainer = document.createElement('div')
    cliffContainer.className = 'special-container'
    cliffContainer.id = 'cliff-container'
    cliffContainer.innerHTML = 
        `<h2>Hurry! Click as many times as you can to climb the cliff!</h2>
        <div id='countdown'>5</div>
        <div class='cliff-btn-div'>
        <button id='cliff-button'>Climb!</button>
        <div>`
    mainEl.appendChild(cliffContainer)
    const cliffButton = document.getElementById('cliff-button')
    clickCount = 0
    cliffButton.addEventListener('click', climb)
    cliffOutcome()
}

function cliffOutcome() {
    let countdownEl = document.getElementById('countdown')
    countdownEl.style.color = '#F71735'
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        countdownEl.animate(timerAnimation, timerAnimTiming)
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 20) {
                page.push(nextPage(page[page.length -1].next[3]))
            }
            if (clickCount >= 15 && clickCount < 20) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            if (clickCount >= 10 && clickCount < 15) {
                page.push(nextPage(page[page.length -1].next[2]))
            }
            if (clickCount < 10) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            render()
            let containerToRemove = document.getElementById('cliff-container')
            mainEl.removeChild(containerToRemove)
        }
    }, 1000)
}

function boat() {
    let boatContainer = document.createElement('div')
    boatContainer.className = 'special-container'
    boatContainer.id = 'boat-container'
    boatContainer.innerHTML = 
        `<h2>Hurry! Click as many times as you can to row away from the waterfall!</h2>
        <div id='countdown'>5</div>
        <div class='boat-btn-div'>
        <button id='boat-button'>Row!</button>
        <div>`
    mainEl.appendChild(boatContainer)
    const boatButton = document.getElementById('boat-button')
    clickCount = 0
    boatButton.addEventListener('click', climb)
    boatOutcome()
}

function boatOutcome() {
    let countdownEl = document.getElementById('countdown')
    countdownEl.style.color = '#39A0ED'
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        countdownEl.animate(timerAnimation, timerAnimTiming)
        timeLeft -= 1;
        countdownEl.style.animation = 'heartBeat'
        countdownEl.style.animationDuration = '1s'
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 20) {
                page.push(nextPage(page[page.length -1].next[3]))
            }
            if (clickCount >= 15 && clickCount < 20) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            if (clickCount >= 10 && clickCount < 15) {
                page.push(nextPage(page[page.length -1].next[2]))
            }
            if (clickCount < 10) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            render()
            let containerToRemove = document.getElementById('boat-container')
            mainEl.removeChild(containerToRemove)
        }
    }, 1000)
}

function portal() {
    let portalContainer = document.createElement('div')
    portalContainer.className = 'special-container'
    portalContainer.id = 'portal-container'
    portalContainer.innerHTML = 
        `<h2>Hurry! Click as many times as you can to run from the decaying portal!</h2>
        <div id='countdown'>5</div>
        <div class='portal-btn-div'>
        <button id='portal-button'>Run!</button>
        <div>`
    mainEl.appendChild(portalContainer)
    const portalButton = document.getElementById('portal-button')
    clickCount = 0
    portalButton.addEventListener('click', climb)
    portalOutcome()
}

function portalOutcome() {
    let countdownEl = document.getElementById('countdown')
    countdownEl.style.color = 'yellow'
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        countdownEl.animate(timerAnimation, timerAnimTiming)
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 10) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            if (clickCount < 10) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            render()
            let containerToRemove = document.getElementById('portal-container')
            mainEl.removeChild(containerToRemove)
        }
    }, 1000)
}

function fight() {
    let fightContainer = document.createElement('div')
    fightContainer.className = 'special-container'
    fightContainer.id = 'fight-container'
    fightContainer.innerHTML = 
        `<h2>Hurry! Click on your sword to fight for your life!</h2>
        <div id='countdown'>5</div>
        <div class='sword-div'>
        <img src="../assets/images/sword-sticker.png" alt="image of a sword" id= 'sword-img'>
        <div>`
    mainEl.appendChild(fightContainer)
    const sword = document.getElementById('sword-img')
    sword.style.maxWidth = '100px'
    clickCount = 0
    sword.addEventListener('click', climb)
    fightOutcome()
}

function fightOutcome() {
    let countdownEl = document.getElementById('countdown')
    countdownEl.style.color = '#F71735'
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        countdownEl.animate(timerAnimation, timerAnimTiming)
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 15) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            if (clickCount < 15) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            render()
            let containerToRemove = document.getElementById('fight-container')
            mainEl.removeChild(containerToRemove)
        }
    }, 1000)
}



function dead() {
    let deadContainer = document.createElement('div')
        deadContainer.className = 'special-container'
        deadContainer.id = 'dead-container'
        deadContainer.innerHTML = 
            `
            <h2>You Died! Do you want to play again?</h2>
            <button class='restart-buttons' id='yes-button'>Yes</button>
            <button class= 'restart-buttons' id='no-button'>No</button>
            `
        containerBlock.appendChild(deadContainer)
}

function giveUp() {
        let giveUpContainer = document.createElement('div')
        giveUpContainer.className = 'special-container'
        giveUpContainer.id = 'give-up-container'
        giveUpContainer.innerHTML = 
            `
            <h2>Would you like to go back?</h2>
            <button class='restart-buttons' id='yes-button'>Yes</button>
            <button class= 'restart-buttons' id='no-button'>No</button>
            `
        containerBlock.appendChild(giveUpContainer)
}

function gameOver() {
    // containerBlock.innerHTML = ''
    gameAudio.playGameOver()
    let gameOverContainer = document.createElement('div')
    gameOverContainer.className = 'special-container'
    gameOverContainer.id = 'game-over-container'
    gameOverContainer.innerHTML =
    `
    <h1>Game Over</h1>
    <a href="../index.html">Return to Main Menu</a>
    `
    mainEl.appendChild(gameOverContainer)
}





//* Functions for generating treasure winnings:

function generateTreasure() {
    let randomizeTreasures = Math.floor(Math.random() * 5)
    console.log(randomizeTreasures, 'randomizeTreasures')
    if (randomizeTreasures === 0) {
        let treasureIdx = Math.floor(Math.random() * relics.length)
        treasureArr = relics[treasureIdx]
        console.log(treasureIdx, 'treasureIdx')
    }
    else {
        let treasureIdx = Math.floor(Math.random() * goldWinnings.length)
        treasureArr = goldWinnings[treasureIdx]
        console.log(treasureIdx, 'treasureIdx')
    }

    console.log(treasureArr)
}
generateTreasure()
