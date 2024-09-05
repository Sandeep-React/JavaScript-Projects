const myAudio = document.querySelector("audio")
const myPlay =  document.getElementById("play")

isAudioPlaying = false

function playAudio(){

    isAudioPlaying = true
    myAudio.play()
    myPlay.classList.replace("fa-play","fa-pause")
}

function pauseAudio(){
    isAudioPlaying = false
    myAudio.pause()
    myPlay.classList.replace("fa-pause","fa-play")
}

myPlay.addEventListener("click", function(){

    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }
})