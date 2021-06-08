// toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1
var activePlayer = 0;

// toglogchiin tsugluulah onoog hadgalah huwisagch
var scores = [0, 0];
// toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;
// shoo ali talaaraa buusniig hadgalah huwisagch, 1-6 hoorond sanamsarguigeer uusgej ugnu.
var diceNumber = Math.floor(Math.random() * 6 + 1);

// ehlehed beltgeh

document.getElementById("score-0").textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector('.dice')
diceDom.style.display = 'none';

// roll dice eventlistener
document.querySelector('.btn-roll').addEventListener('click', function () {
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
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    // ug toglogchiin current onoog global onoond nemne
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // ug toglogch hojson esehiig shalgah
    if (scores[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        toggleActivePlayer();
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