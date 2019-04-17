function create_duplicate_html_card (card_name) {
    function create_html_card (card_name) {
    let front = document.createElement("img");
    let back = document.createElement("img");
    let card = document.createElement("div");
    card.className = "memory-card";
    card.dataset.cardname = card_name;
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

window.onload = function welcomePlayer () {
    let startGame = false;
    let welcome = document.getElementsByClassName('welcome');

}


function pick_card () {
    let audio = new Audio("/static/music/explorer.mp3");
    audio.pause();
    audio.play();
    var cards = ["stalagg", "emperor", "feugen", "kelthuzad", "loatheb", "majordomo"]; ///"shade", "baron"];
    for (let i = 0; i < cards.length; i++) {
        create_duplicate_html_card(cards[i])
    }
}

pick_card();