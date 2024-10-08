const PlayButton = document.getElementById("play")
const myVideo = document.querySelector("video")
const progressBar = document.getElementById("progress-bar")
const videoDuration = document.getElementById("duration-time")
const videoTime = document.getElementById("current-time")
const progressRange = document.getElementById("progress-range")
const volumeRange = document.getElementById("volume-range")
const volumeBar = document.getElementById("volume-bar")
const myVolume = document.getElementById("volume")
const speed = document.getElementById("speed")
const fullScreen = document.getElementById("full-screen")
const playerContainer = document.getElementById("player-container")

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


// myVideo.addEventListener("timeupdate", function(event){
//     // console.log(event) // currentTime, duration
//     let myCurrentTime = myVideo.currentTime
//     let myDuration = myVideo.duration
//     // console.log(myCurrentTime, myduration)
//     let progressPercentage = (myCurrentTime / myDuration) * 100
//     progressBar.style.width = `${progressPercentage}%`

//     // Logic for duration --->  Minutes & seconds

//     const durationInMinutes = Math.floor(myDuration / 60)
//     // console.log(durationInMinutes)
//     let durationInSeconds = Math.floor(myDuration % 60)
//     // console.log(durationInSeconds)

//     if( durationInSeconds <= 9){
//         durationInSeconds = `0${durationInSeconds}`
//     }

//     videoDuration.innerText = `${durationInMinutes}:${durationInSeconds}`

//     // Logic for current time 

//     const currentTimeInMinutes = Math.floor(myCurrentTime /60)
//     // console.log(currentTimeInMinutes)

//     let currentTimeInSeconds = Math.floor(myCurrentTime % 60)
//     // console.log(currentTimeInSeconds)

//     if(currentTimeInSeconds <= 9){
//         currentTimeInSeconds = `0${currentTimeInSeconds}`
//     }

//     videoTime.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}/`
// })


function formateTime(seconds){
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? '0': ''}${remainingSeconds}`
}

myVideo.addEventListener("timeupdate", function(event){
    const myCurrentTime = myVideo.currentTime
    const myDuration = myVideo.duration

    const progressPercentage = (myCurrentTime / myDuration) * 100;
    progressBar.style.width = `${progressPercentage}%`

    videoDuration.innerText = formateTime(myDuration)
    videoTime.innerText = `${formateTime(myCurrentTime)}/`
})

progressRange.addEventListener("click", function(event){
    // console.log(event)
    const totalWidth = event.srcElement.offsetWidth
    // console.log(totalWidth)
    // offsetWidth:1282 --> Total width is 1282
    const clickedWidth = event.offsetX
    // console.log(clickedWidth)
    const clickedPercentage =(clickedWidth / totalWidth) * 100
    // console.log(clickedPercentage)
    
    progressBar.style.width = `${clickedPercentage}%`   
    
    myVideo.currentTime = (clickedWidth / totalWidth) * myVideo.duration

})

volumeRange.addEventListener("click", function(event){
    const totalWidth = event.srcElement.offsetWidth
    const clickedWidth = event.offsetX
    const volumePercentage =(clickedWidth / totalWidth) * 100

    // console.log(clickedWidth / totalWidth) // 0 to 1
    // console.log(volumePercentage)
    volumeBar.style.width = `${volumePercentage}%`

    let volumeInfo = clickedWidth / totalWidth

    /* 
    0 ---> no sound
    1 ---> max sound
    */

    if(volumeInfo < 0.5){
        myVideo.volume = 0.2
    }else{
        myVideo.volume = 1
    }
})

let isMuted = false

function mute(){
    isMuted = true
    myVideo.volume = 0
    myVolume.classList.replace("fa-volume-up", "fa-volume-mute")
    volumeBar.style.width = `${0}%`
}
function unMute(){
    isMuted = false

    const totalWidth = event.srcElement.offsetWidth
    const clickedWidth = event.offsetX
    const volumePercentage =(clickedWidth / totalWidth) * 100
    volumeBar.style.width = `${volumePercentage}%`

    let volumeInfo = clickedWidth / totalWidth

    if(volumeInfo < 0.5){
        myVideo.volume = 0.2
    }else{
        myVideo.volume = 1
    }
   
    myVolume.classList.replace( "fa-volume-mute","fa-volume-up")
}

myVolume.addEventListener("click", function(){
   if(isMuted){
    unMute()
   }else{
    mute()
   }
   
})

speed.addEventListener("change", function(){
    // console.log(speed.value)
    myVideo.playbackRate = speed.value
})


let isFullScreen = false

function displayFullScreen(container){
    if(container.requestFullscreen){
        container.requestFullscreen()
    }
}

function closeFullScreen(container){
    if(container.exitFullscreen){
        container.exitFullscreen()
    }
}

fullScreen.addEventListener("click", function(){

    if(!isFullScreen){
        displayFullScreen(playerContainer)
    }else{
        closeFullScreen(playerContainer)
    }

})