function setPlayerStyle(player) {
    player.style.border = "1px solid red";
    player.style.borderRadius = "10px";
    player.style.margin = "10px";
    player.style.padding = "10px";
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `<h4 class="player-name">Player - 5</h4>
    <p>Nulla quo facere molestiae expedita quae ea veritatis distinctio nemo quia accusantium ratione
        temporibus fugit, voluptas, tempora mollitia iusto quod! Impedit odio qui atque dolorem minus
        maiores temporibus non asperiores!</p>`;
    playersContainer.appendChild(player);
    setPlayerStyle(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() == 'div') {
        (event.target).style.backgroundColor = "yellow";
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})