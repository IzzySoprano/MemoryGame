// Flipping the cards

let cards = document.querySelectorAll(".Soprano-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

// Shuffling the cards

// Matching the cards

// Music Player
const musicContainer = document.querySelector(".music-container")
const playBtn = document.getElementById("play")
const pauseBtn = document.getElementById("pause")
const audio = document.getElementById("audio")
const progress = document.querySelector(".music-container")
const progressContainer = document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")
const imgContainer = document.querySelector('.img-container')


playBtn.addEventListener("click", () => {

musicContainer.classList.add('music-container.play')
playBtn.querySelector('i.fas').classList.add('fa-play')
audio.play()
})

function pauseSong() {
   musicContainer.classList.remove('play')
   playBtn.querySelector('i-fas').classList.remove('fa-play')
   
   audio.pause()
}

// Event Listeners

// playBtn.addEventListener("click", () => {
//    const isPlaying = musicContainer.classList.contains('play');
   
//    if (isPlaying) {
//       pauseSong();
//    } else {
//       playSong()
//   }
// });

// audio.addEventListener('timeupdate', updateProgress)
