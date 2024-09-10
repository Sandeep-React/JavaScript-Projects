const PlayButton = document.getElementById("play")
const myVideo = document.querySelector("video")
const progressBar = document.getElementById("progress-bar")
const videoDuration = document.getElementById("duration-time")
const videoTime = document.getElementById("current-time")


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