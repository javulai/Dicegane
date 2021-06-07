// toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1
var activePlayer = 1;

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

document.querySelector('.btn-roll').addEventListener('click', function () {
    var diceNumber = Math.floor(Math.random() * 6 + 1);
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';
})
