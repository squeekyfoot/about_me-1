'use strict';
setTimeout(function() {
    // this code runs 3 seconds after the page loads
}, 3000);

alert('Help me choose a pet!');

var personality = prompt('Hello, should I choose an outgoing pet?', 'y or n?').toLowerCase();
if (personality === 'y' || personality === 'yes') {
  personality = 'friendly';
}
else {
  personality = 'shy';
}
var fur = prompt('Should I choose a furry pet', 'y or n?').toLowerCase();
if (fur === 'y' || fur === 'yes') {
  fur = 'fluffy';
}
else {
  fur = 'self-cleaning';
}
var noisy = prompt('Should I choose a boisterous pet?', 'y or n?').toLowerCase();
if (noisy === 'y' || noisy === 'yes') {
  noisy = 'chatty';
}
else {
  noisy = 'quiet';
}
var hugs = prompt('Should I choose a cuddlsome pet?', 'y or n?').toLowerCase();
if (hugs === 'y' || hugs === 'yes') {
  hugs = 'snuggly';
}
else {
  hugs = 'reserved';
}
var weight = ('Should I choose a pet that weights more than 15 pounds?', 'yes or no?').toLowerCase();
if (weight === 'y' || weight === 'yes') {
  weight = 'hefty';
}
else{
  weight = 'sleek';
}

alert('Thanks! I will adopt a ' + personality + ', ' + fur + ', ' + noisy + ',  ' + hugs + ', and ' + weight + ' pet !!!');
