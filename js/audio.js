let backgroundMusic = new Audio('../assets/audio/szegvari__dark-castle-atmosphere.wav')

function playBackgroundMusic() {
    backgroundMusic.volume = 0.5
    backgroundMusic.play()
    backgroundMusic.loop = true
}

export {
    playBackgroundMusic
}