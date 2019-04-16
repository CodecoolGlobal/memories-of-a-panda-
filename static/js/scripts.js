let bla = function one_card () {
    let front = document.createElement("img");
    let back = document.createElement("img");
    let card = document.createElement("div");
    card.className = "memory-card";
    front.className = "front-face";
    front.src = "static/img/emperor.gif";
    back.className = "back-face";
    back.src = "static/img/adventurecardback.png";
    card.appendChild(front);
    card.appendChild(back);
    return card;
    };


function maybe () {
    let game = document.getElementsByClassName('memory-game');
    game[0].appendChild(bla());
    game[0].appendChild(bla());
}


maybe();



