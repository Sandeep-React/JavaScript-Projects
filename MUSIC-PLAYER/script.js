const myAudio = document.querySelector("audio")
const myPlay =  document.getElementById("play")

isAudioPlaying = false

function playAudio(){

    isAudioPlaying = true
    myAudio.play()
}

function pauseAudio(){
    isAudioPlaying = false
    myAudio.pause()
}

myPlay.addEventListener("click", function(){

    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }

})