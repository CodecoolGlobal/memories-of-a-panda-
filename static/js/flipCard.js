const cards = document.querySelectorAll(".memory-card");

for (card of cards) {
    card.addEventListener('click', flipCard);
}

function flipCard() {
    this.classList.toggle('flip');
}
