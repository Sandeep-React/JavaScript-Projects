const myAudio = document.querySelector("audio")
const myPlay =  document.getElementById("play")
const mysinger = document.getElementById("singer")
const mysong = document.getElementById("song")
const myImage = document.querySelector("img")
const myforward = document.getElementById("forward")
const mybackward = document.getElementById("backward")


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

const songsData = [
    {
        singerName: "Sophie Devine",
        songName: "All the way in the Desert",
        info: "image-1"
    },
    {
        singerName: "Jemma Barbsy",
        songName: "In to the sky",
        info:"image-2"
    },
    {
        singerName: "Ecclestone",
        songName: "Sing a song",
        info: "image-3"
    }
]

// song = {
//     singerName: "Sophie Devine",
//     singName: "All the way in the Desert",
//     info: "image-1"
// }

function loadSong(song){
    mysinger.innerText = song.singerName
    mysong.innerText = song.songName
    myImage.src = `IMAGES/${song.info}.jpg`
    myAudio.src = `AUDIO/${song.info}.mp3`
}

// loadSong(data[0])

 let songIndex = 0

 // Forward function
 function nextSong(){
    if(songIndex > songsData.length -1){
        songIndex = 0
    }
    console.log(songIndex)
    loadSong(songsData[songIndex])
    songIndex ++
    playAudio()
 }

//  myforward.addEventListener("click", nextSong) // we can also write it

 myforward.addEventListener("click", function(){
    nextSong()
 })

