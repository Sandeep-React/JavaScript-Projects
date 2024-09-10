const PlayButton = document.getElementById("play")
const myVideo = document.querySelector("video")


let isVideoPlaying = false

function playVideo(){
    isVideoPlaying = true
    PlayButton.classList.replace("fa-play", "fa-pause")
    myVideo.play()
}

function pauseVideo(){
    isVideoPlaying = false
    PlayButton.classList.replace("fa-pause", "fa-play")
    myVideo.pause()
}

function controlVideo(){
    if(isVideoPlaying){
        pauseVideo()
    }else{
        playVideo()
    }
}

PlayButton.addEventListener("click", controlVideo)

