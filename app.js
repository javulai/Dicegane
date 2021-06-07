// toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1
var activePlayer = 1;

// toglogchiin tsugluulah onoog hadgalah huwisagch
var scores = [0, 0];
// toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;
// shoo ali talaaraa buusniig hadgalah huwisagch, 1-6 hoorond sanamsarguigeer uusgej ugnu.
var dice = Math.floor(Math.random() * 6 + 1);

// ehlehed beltgeh
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';
