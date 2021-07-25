/*jshint esversion: 6 */

// Flipping the cards
function flipCard() {
  if (flipping) {
    return;
  }
  flipping = true;
  this.classList.toggle("flip");
  const flippedCard = this.id;
  if (firstCard) {
    firstCard = false;
    flippedCards.push(flippedCard);
    flipping = false;
  } else {
    if (flippedCard === flippedCards[0]) {
      firstCard = true;
      flippedCards = [];
      flipping = false;
      return;
    } else {
      setTimeout(match(flippedCard), 1000);
    }
  }
}

let firstCard = true;

// Matching the cards
let cardsArray = [
  { name: "tony1", img: "Tony-Soprano.jpg" },
  { name: "tony2", img: "Tony-Soprano.jpg" },

  { name: "adriana-la-cerva1", img: "Adriana-La-Cerva.jpg" },
  { name: "adriana-la-cerva2", img: "Adriana-La-Cerva.jpg" },

  { name: "anthony-soprano-jr1", img: "Anthony-Soprano-Jr.jpg" },
  { name: "anthony-soprano-jr2", img: "Anthony-Soprano-Jr.jpg" },

  { name: "artie-bucco1", img: "Artie-Bucco.jpg" },
  { name: "artie-bucco2", img: "Artie-Bucco.jpg" },

  { name: "bobby-baccalieri1", img: "Bobby-Baccalieri.jpg" },
  { name: "bobby-baccalieri2", img: "Bobby-Baccalieri.jpg" },

  { name: "camela-soprano1", img: "Camela-Soprano.jpg" },
  { name: "camela-soprano2", img: "Camela-Soprano.jpg" },

  { name: "carmine-lupertazzi1", img: "Carmine-Lupertazzi.jpg" },
  { name: "carmine-lupertazzi2", img: "Carmine-Lupertazzi.jpg" },

  { name: "christopher-moltisanti1", img: "Christopher-Moltisanti.jpg" },
  { name: "christopher-moltisanti2", img: "Christopher-Moltisanti.jpg" },

  { name: "corrado-soprano1", img: "Corrado-Soprano.jpg" },
  { name: "corrado-soprano2", img: "Corrado-Soprano.jpg" },

  { name: "dr-elliot-kupferberg1", img: "Dr-Elliot-Kupferberg.jpg" },
  { name: "dr-elliot-kupferberg2", img: "Dr-Elliot-Kupferberg.jpg" },

  { name: "dr-jennifer-melfi1", img: "Dr-Jennifer-Melfi.jpg" },
  { name: "dr-jennifer-melfi2", img: "Dr-Jennifer-Melfi.jpg" },

  { name: "gloria-trillo1", img: "Gloria-Trillo.jpg" },
  { name: "gloria-trillo2", img: "Gloria-Trillo.jpg" },

  { name: "hesh-rabkin1", img: "Hesh-Rabkin.jpg" },
  { name: "hesh-rabkin2", img: "Hesh-Rabkin.jpg" },

  { name: "janice-soprano1", img: "Janice-Soprano.jpg" },
  { name: "janice-soprano2", img: "Janice-Soprano.jpg" },

  { name: "johnny-sacramoni1", img: "Johnny-Sacramoni.jpg" },
  { name: "johnny-sacramoni2", img: "Johnny-Sacramoni.jpg" },

  { name: "livia-soprano1", img: "Livia-Soprano.jpg" },
  { name: "livia-soprano2", img: "Livia-Soprano.jpg" },

  { name: "meadow-soprano1", img: "Meadow-Soprano.jpg" },
  { name: "meadow-soprano2", img: "Meadow-Soprano.jpg" },

  { name: "paulie-walnut1", img: "Paulie-Walnut.jpg" },
  { name: "paulie-walnut2", img: "Paulie-Walnut.jpg" },

  { name: "silvio-dante1", img: "Silvio-Dante.jpg" },
  { name: "silvio-dante2", img: "Silvio-Dante.jpg" },

  { name: "sal-bonspensiero1", img: "Sal-Bonpensiero.jpg" },
  { name: "sal-bonspensiero2", img: "Sal-Bonpensiero.jpg" },
];

let flipping = false;

// Function to see if cards match
let flippedCards = [];
function match(flippedCard) {
  firstCard = true;
  flippedCards.push(flippedCard);

  const trimmedClickedCard = flippedCard.substring(0, flippedCard.length - 1);
  const trimmedCardFromArray = flippedCards[0].substring(
    0,
    flippedCard.length - 1
  );
  if (trimmedClickedCard === trimmedCardFromArray) {
    flippedCards.forEach((card) => {
      const cardElement = document.getElementById(card);
      cardElement.removeEventListener("click", flipCard);
    });
    firstCard = true;
    flippedCards = [];
    flipping = false;
  } else {
    setTimeout(() => {
      flippedCards.forEach((card) => {
        const cardElement = document.getElementById(card);
        cardElement.classList.remove("flip");
      });
      firstCard = true;
      flippedCards = [];
      flipping = false;
    }, 1000);
  }
}

// Shuffling the cards
let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    [array[i], array[a]] = [array[a], array[i]];
  }
  return cardsArray;
};

// Function that will render my cards
function cardsToDom(array) {
  const container = document.querySelector(".Soprano-game");
  for (let i of array) {
    const code = `
    <div class="Soprano-card" id="${i.name}">
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

// Function for when the page is reloaded
function init() {
  let random = shuffleArray(cardsArray);
  cardsToDom(random);
  let cards = document.querySelectorAll(".Soprano-card");
  cards.forEach((card) => card.addEventListener("click", flipCard));
}
init();

// Music player Credit to Traversy Media
const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Progress Bar
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
