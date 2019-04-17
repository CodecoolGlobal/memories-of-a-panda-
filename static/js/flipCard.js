var level1, level2;


function create_duplicate_html_card (card_name) {
    function create_html_card (card_name) {
    let front = document.createElement("img");
    let back = document.createElement("img");
    let card = document.createElement("div");
    card.className = "memory-card";
    card.setAttribute("data-cardname", `${card_name}`);
    front.className = "front-face";
    front.src = "static/img/" + card_name + ".gif";
    back.className = "back-face";
    back.src = "static/img/adventurecardback.png";
    card.appendChild(front);
    card.appendChild(back);
    return card;
    }
    let game = document.getElementsByClassName('memory-game');
    game[0].appendChild(create_html_card(card_name));
    game[0].appendChild(create_html_card(card_name));
}


function pick_card () {
    let audio = new Audio("/static/music/explorer.mp3");
    audio.pause();
    audio.play();
    let level3 = true;
    let cards = document.querySelectorAll(".memory-game")

    if (level1) {
        var arrayOfCards = ["stalagg", "emperor"]
        for (card of cards) {
            card.setAttribute("data-level", "1")
        }
    }
    else if (level2) {
        arrayOfCards = ["stalagg", "emperor", "feugen", "kelthuzad", "loatheb", "majordomo"]; ///"shade", "baron"];
        for (card of cards) {
            card.setAttribute("data-level", "2")
        }
    }
    else if (level3) {
        arrayOfCards = ["stalagg","stalagg","stalagg","stalagg","stalagg","stalagg","stalagg","stalagg","stalagg"];
        for (card of cards) {
            card.setAttribute("data-level", "3")
        }
    }
    for (let i = 0; i < arrayOfCards.length; i++) {
        create_duplicate_html_card(arrayOfCards[i])
    }
    addEventListeners();
}


function checkWin () {
    let flippedCards = document.querySelectorAll(".memory-card");
    for (card of flippedCards) {
        console.log(card)
    }
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
    checkWin();
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
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard)
    }

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard = "";
        lockBoard = false;
    }, 1500)
}


function addEventListeners () {
    let cards = document.querySelectorAll(".memory-card");
    for (card of cards) {
        card.addEventListener('click', flipCard);
    }
}

pick_card();
