const myAudio = document.querySelector("audio")
const myPlay =  document.getElementById("play")
const mySinger = document.getElementById("singer")
const mySong = document.getElementById("song")
const myImage = document.querySelector("img")
const myForward = document.getElementById("forward")
const myBackward = document.getElementById("backward")
const myProgressBar = document.getElementById("progressbar")
const durationTime = document.getElementById("duration")
const timePlayed = document.getElementById("currenttime")

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
    mySinger.innerText = song.singerName
    mySong.innerText = song.songName
    myImage.src = `IMAGES/${song.info}.jpg`
    myAudio.src = `AUDIO/${song.info}.mp3`
}

// loadSong(data[0])

 let songIndex = 0

 // Forward function
 function nextSong(){
     songIndex ++
    if(songIndex > songsData.length -1){
        songIndex = 0
    }
    // console.log(songIndex)
    loadSong(songsData[songIndex])
    playAudio()
 }

//  myforward.addEventListener("click", nextSong) // we can also write it

 myForward.addEventListener("click", function(){
    nextSong()
 })

 // backward function
 function previousSong(){
     songIndex --
    if(songIndex < 0){
        songIndex = songsData.length-1
    }
    // console.log(songIndex)
    
    loadSong(songsData[songIndex])
    playAudio()
 }

 myBackward.addEventListener("click",previousSong)


//  Current time and total duration of the audio 
myAudio.addEventListener("timeupdate", function(event){
    // console.log(event)
    // console.log(event.srcElement.duration)
    // console.log(event.srcElement.currentTime)
    // console.table([event.srcElement.duration, event.srcElement.currentTime])

    let myDuration = event.srcElement.duration
    let myCurrentTime = event.srcElement.currentTime
    
    let myPercentage = (myCurrentTime / myDuration) * 100 // Percentage of the audio played

    // console.log(myPercentage)

     myProgressBar.style.width = `${myPercentage}%`

   let durationInMinutes = Math.floor((myDuration / 60))
//    console.log(durationInMinutes)

   let durationInSeconds = Math.floor((myDuration % 60))
//    console.log(durationInSeconds )

   if(durationInSeconds < 9){

       durationInSeconds = `0${durationInSeconds}`
   }
   
  durationTime.innerText = `${durationInMinutes}:${durationInSeconds}`
  
  
  let currentTimeInMinutes = Math.floor((myCurrentTime / 60))

  let currentTimeInSeconds = Math.floor((myCurrentTime % 60))

   if(currentTimeInSeconds < 9){

       currentTimeInSeconds = `0${currentTimeInSeconds}`
   }
   
  timePlayed.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}`
   
})

