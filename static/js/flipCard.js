const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

for (card of cards) {
    card.addEventListener('click', flipCard);
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (hasFlippedCard === false) {
    hasFlippedCard = true;
    firstCard = this;

    return;
    }

    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    if (isMatch) {disableCards();
    let wellplayed1 = new Audio("/static/music/wellplayed.mp3");
    let wellplayed2 = new Audio("/static/music/suffer.mp3");
    let random = Math.floor(Math.random()*2);
    if (random === 1) {
        wellplayed1.play();
    }
    else {
        wellplayed2.play();}
    }
    else {unflipCards();
    let mistake1 = new Audio("/static/music/mistake.mp3");
    let mistake2 = new Audio("/static/music/sorry.mp3");
    let random = Math.floor(Math.random()*2);
    if (random === 1) {
        mistake1.play();
    }
    else {
        mistake2.play();}
    }
}

function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        firstCard = "";
        lockBoard = false;
    }, 1500)

    isMatch ? disableCards() : unflipCards()
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard = false;
    }, 1500)
}

