let backgroundMusic = new Audio('../assets/audio/szegvari__dark-castle-atmosphere.wav')
let portalAudio = new Audio('../assets/audio/matrixxx__crystal-magic.wav')

function playBackgroundMusic() {
    backgroundMusic.volume = 0.125
    backgroundMusic.play()
    backgroundMusic.loop = true
}


function playPortalAudio() {
    portalAudio.volume = .125
    portalAudio.play()
}

export {
    playBackgroundMusic,
    playPortalAudio
}