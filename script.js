// Flipping the cards

let cards = document.querySelectorAll(".Soprano-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

// Matching the cards

let cardsArray = [
  { name: "tony", img: "tony-soprano.jpg", },
  
  { name: "adriana-la-cerva", img: "adriana-la-cerva.jpg", },

  { name: "anthony-soprano-jr", img: "anthony-soprano-jr.jpg", },

  { name: "artie-bucco", img: "artie-bucco.jpg", },

  { name: "bobby-baccalieri", img: "bobby-baccalieri.jpg", },

  { name: "camela-soprano", img: "camela-soprano.jpg", },

  { name: "carmine-lupertazzi", img: "carmine-lupertazzi.jpg", },

  { name: "christopher-moltisanti", img: "christopher-moltisanti.jpg", },

  { name: "corrado-soprano", img: "corrado-soprano.jpg", },

  { name: "dr-elliot-kupferberg", img: "dr-elliot-kupferberg.jpg", },

  { name: "dr-jennifer-melfi", img: "dr-jennifer-melfi.jpg", },

  { name: "gloria-trillo", img: "gloria-trillo.jpg", },
  
  { name: "hesh-rabkin", img: "hesh-rabkin.jpg", },
  
  { name: "janice-soprano", img: "janice-soprano.jpg", },
  
  { name: "johnny-sacramoni", img: "johnny-sacramoni.jpg", },
  
  { name: "livia-soprano", img: "livia-soprano.jpg", },
  
  { name: "meadow-soprano", img: "meadow-soprano.jpg", },
  
  { name: "paulie-walnut", img: "paulie-walnut.jpg", },
  
  { name: "silvio-dante", img: "silvio-dante.jpg", },

  { name: "sal-bonspensiero", img: "sal-bonspensiero.jpg", },
  ];

// Grab the div with a class of root

const game = document.getElementsByClassName('Soprano-Game')

// Create a section with a class of grid

const grid = document.createElement('section')



// Matching the list









// Shuffling the cards

let shuffleArray = Array => {
  for (let i = array.length; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    const cardsArray = array[i];
    array[i] = array[a];
    array[cardsArray] = temp;
  }

  return array;
};













































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

pauseBtn.addEventListener("click",() => {
   musicContainer.classList.remove('play')
   playBtn.querySelector('i-fas').classList.remove('fa-play')
   
   audio.pause()
}
)

// Event Listeners

// playBtn.addEventListener("click", () => {
//    const isPlaying = musicContainer.classList.contains('play');
   
//    if (isPlaying) {
//       pauseSong();
//    } else {
//       playSong()
//   }
// });

// Progress Bar

function updateProgress(e) {
const { duration, currentTime } = e.srcElement
const progressPercent = (currentTime / duration) * 100
progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientwidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}

 audio.addEventListener('timeupdate', updateProgress)

 progressContainer.addEventListener('click', setProgress)
