let backgroundMusic = new Audio('../assets/audio/szegvari__dark-castle-atmosphere.wav')
let portalAudio = new Audio('../assets/audio/matrixxx__crystal-magic.wav')
let deadSound = new Audio('../assets/audio/gunnbladez__147-octane-dead-rising-piano-01.wav')

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
    deadSound.volume = 0.5
    deadSound.play()
}

export {
    playBackgroundMusic,
    playPortalAudio,
    playDeadSound
}