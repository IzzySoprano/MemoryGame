// Flipping the cards 

const cards = document.querySelectorAll(".Soprano-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));