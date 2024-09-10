const PlayButton = document.getElementById("play")
const myVideo = document.querySelector("video")
const progressBar = document.getElementById("progress-bar")


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


myVideo.addEventListener("timeupdate", function(event){
    // console.log(event) // currentTime, duration
    let myCurrentTime = myVideo.currentTime
    let myduration = myVideo.duration
    // console.log(myCurrentTime, myduration)
    let progressPercentage = (myCurrentTime / myduration) * 100
    progressBar.style.width = `${progressPercentage}%`
})

