//Global huwisagchid 
var activePlayer;
var scores;
var roundScore;
var isGameOver;
// toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1
var diceDom = document.querySelector('.dice')
initGame();
function initGame() {
    // togloom ehellee geded tuluwt oruulna
    isGameOver = false;
    activePlayer = 0;
    // toglogchiin tsugluulah onoog hadgalah huwisagch
    scores = [0, 0];
    // toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
    roundScore = 0;
    // shoo ali talaaraa buusniig hadgalah huwisagch, 1-6 hoorond sanamsarguigeer uusgej ugnu.
    diceNumber = Math.floor(Math.random() * 6 + 1);

    // ehlehed beltgeh

    document.getElementById("score-0").textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    //winner bolson bol solino
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = 'none';
}
// roll dice eventlistener
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGameOver !== true) {
        var diceNumber = Math.floor(Math.random() * 6 + 1);
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + diceNumber + '.png';

        //buusan toog 1-s uur bol idevhtei toglogchiin onoog nemegduulne.
        if (diceNumber !== 1) {
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // ene toglogchiin current onoog 0 bolgono
            toggleActivePlayer();
        }
    } else {
        alert('Game is over!');
    }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGameOver !== true) {
        // ug toglogchiin current onoog global onoond nemne
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // ug toglogch hojson esehiig shalgah
        if (scores[activePlayer] >= 100) {
            // togloomiig duussan tuluwt oruulna 
            isGameOver = true;
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            toggleActivePlayer();
        }

    }
})

function toggleActivePlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScore = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // 1 buusan bol toglogchiin eeljiig solij ugnu

    // active tseg arilgana
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display = 'none';
}

// new game button
document.querySelector('.btn-new').addEventListener('click', initGame);
