let backgroundMusic = new Audio('../assets/audio/580374__szegvari__dark-castle-atmosphere.mp3')
let portalAudio = new Audio('../assets/audio/657541__matrixxx__crystal-magic.mp3')
let deadSound = new Audio('../assets/audio/662620__gunnbladez__147-octane-dead-rising-piano-01.mp3')

function playBackgroundMusic() {
    backgroundMusic.volume = 0.125
    backgroundMusic.play()
    backgroundMusic.loop = true
}


function playPortalAudio() {
    portalAudio.volume = .125
    portalAudio.play()
}

function playDeadSound() {
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    deadSound.volume = 1
    deadSound.play()
}

export {
    playBackgroundMusic,
    playPortalAudio,
    playDeadSound
}