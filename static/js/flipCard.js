const cards = document.querySelectorAll(".memory-card");

for (card of cards) {
    card.addEventListener('click', flipCard);
}

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

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

    isMatch ? disableCards() : unflipCards()
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

        lockBoard = false;
    }, 1500)
}