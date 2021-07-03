// Flipping the cards

let cards = document.querySelectorAll(".Soprano-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

// Matching the cards

let cardsArray = [
  { name: "tony", img: "Tony-Soprano.jpg" },

  { name: "adriana-la-cerva", img: "Adriana-La-Cerva.jpg" },

  { name: "anthony-soprano-jr", img: "Anthony-Soprano-Jr.jpg" },

  { name: "artie-bucco", img: "Artie-Bucco.jpg" },

  { name: "bobby-baccalieri", img: "Bobby-Baccalieri.jpg" },

  { name: "camela-soprano", img: "Camela-Soprano.jpg" },

  { name: "carmine-lupertazzi", img: "Carmine-Lupertazzi.jpg" },

  { name: "christopher-moltisanti", img: "Christopher-Moltisanti.jpg" },

  { name: "corrado-soprano", img: "Corrado-Soprano.jpg" },

  { name: "dr-elliot-kupferberg", img: "Dr-Elliot-Kupferberg.jpg" },

  { name: "dr-jennifer-melfi", img: "Dr-Jennifer-Melfi.jpg" },

  { name: "gloria-trillo", img: "Gloria-Trillo.jpg" },

  { name: "hesh-rabkin", img: "Hesh-Rabkin.jpg" },

  { name: "janice-soprano", img: "Janice-Soprano.jpg" },

  { name: "johnny-sacramoni", img: "Johnny-Sacramoni.jpg" },

  { name: "livia-soprano", img: "Livia-Soprano.jpg" },

  { name: "meadow-soprano", img: "Meadow-Soprano.jpg" },

  { name: "paulie-walnut", img: "Paulie-Walnut.jpg" },

  { name: "silvio-dante", img: "Silvio-Dante.jpg" },

  { name: "sal-bonspensiero", img: "Sal-Bonpensiero.jpg" },
];

// Grab the div with a class of root

const game = document.getElementsByClassName("Soprano-Game");

// Create a section with a class of grid

const grid = document.createElement("section");

// Matching the list

// Shuffling the cards

let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    [array[i], array[a]] = [array[a], array[i]];
  }
  return cardsArray;
};

function cardsToDom(array) {
  const container = document.querySelector('.Soprano-game');
  
  for (let i of array) {
    const code = `
        <div class="Soprano-card">
          <div class="Back-card">
              <img class="Soprano_image" src="assets/img/Characters/${i.img}" alt="Characters">
          </div>
          <div class="front-card">
              <img class="Soprano_image" src="assets/img/Sopranos-Title.jpg" alt="Sopranos-Title">
          </div>
      </div>
    `;

    container.innerHTML += code;
  }
}

function init() {
  let random = shuffleArray(cardsArray)
  cardsToDom(random);
}
init();















// // Music Player
// const musicContainer = document.querySelector(".music-container")
// const playBtn = document.getElementById("play")
// const pauseBtn = document.getElementById("pause")
// const audio = document.getElementById("audio")
// const progress = document.querySelector(".music-container")
// const progressContainer = document.querySelector(".progress-container")
// const title = document.querySelector("#title")
// const cover = document.querySelector("#cover")
// const imgContainer = document.querySelector('.img-container')

// playBtn.addEventListener("click", () => {

// musicContainer.classList.add('music-container.play')
// playBtn.querySelector('i.fas').classList.add('fa-play')
// audio.play()
// })

// pauseBtn.addEventListener("click",() => {
//    musicContainer.classList.remove('play')
//    playBtn.querySelector('i-fas').classList.remove('fa-play')

//    audio.pause()
// }
// )

// // Event Listeners

// // playBtn.addEventListener("click", () => {
// //    const isPlaying = musicContainer.classList.contains('play');

// //    if (isPlaying) {
// //       pauseSong();
// //    } else {
// //       playSong()
// //   }
// // });

// // Progress Bar

// // function updateProgress(e) {
// // const { duration, currentTime } = e.srcElement
// // const progressPercent = (currentTime / duration) * 100
// // progress.style.width = `${progressPercent}%`
// // }

// // function setProgress(e) {
// //   const width = this.clientwidth
// //   const clickX = e.offsetX
// //   const duration = audio.duration

// //   audio.currentTime = (clickX / width) * duration
// // }

// //  audio.addEventListener('timeupdate', updateProgress)

// //  progressContainer.addEventListener('click', setProgress)
