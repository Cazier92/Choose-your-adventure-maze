// console.log('sanity check')

window.addEventListener('keydown',whatKey)

function whatKey(evt) {
    let key = evt.key
    console.log(key)
}


//*Constants:



//*Variables:

let integrityPercent = 60
let timeLeftTreasureHunt
let gold = 0
let treasure = []

//*Cached Element References:
const mainEl = document.querySelector('main')
const gameBoard = document.getElementById('game-board')
const integrityBar = document.getElementById('integrity-bar')
const returnLink = document.querySelector('a')
const integrityDiv = document.getElementById('integrity-div')

//*Event Listeners:

gameBoard.addEventListener('click', play)

//*Functions:

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
    let treasure = document.getElementById('treasureSq')
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
        treasure.style.backgroundImage = 'url(../assets/images/gold-crown-coin-icon.png)'
        // treasure.style.backgroundColor = ''
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







export {
    treasureInit,
    createGameBoard,
    createTreasure,
    play,
    removeGameBoard,
}