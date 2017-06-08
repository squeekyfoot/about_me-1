'use strict';
// setTimeout(function() {
//     // this code runs 3 seconds after the page loads
// }, 3000);

alert('I love animals. Will you help me choose a pet?');

var personality = prompt('Should I choose an outgoing pet?', 'y or n?').toLowerCase();
if (personality === 'y' || personality === 'yes') {
  personality = 'friendly';
}
else if (personality === 'n' || personality === 'n') {
  personality = 'shy';
}
else {
  alert('Okay, I will choose');
  personality = 'crazy';
}
console.log('pet personality:' + personality);
alert('My new pet will have a ' + personality + ' personality');


var fur = prompt('Should I choose a shaggy pet', 'y or n?').toLowerCase();
if (fur === 'y' || fur === 'yes') {
  fur = 'shaggy';
}
else if (fur === 'n' || personality === 'n') {
  fur = 'self-cleaning';
}
else {
  alert('Gosh, I guess I will choose!');
  fur = 'woolly';
}
console.log('pet fur: ' + fur);
alert('My new pet will be ' + fur + '!');

var noise_level = prompt('Should I choose a boisterous pet?', 'y or n?').toLowerCase();
if (noise_level === 'y' || noise_level === 'yes') {
  noise_level = 'chatty';
}
else if (noise_level === 'n' || noise_level === 'no'){
  noise_level = 'quiet';
}
else {
  alert('It looks as if I will choose!');
  noise_level = 'rambunctious';
}
console.log('pet noise_level: ' + noise_level);
alert('My new pet will be ' + noise_level + '!');

var hugs = prompt('Should I choose a cuddly pet?', 'y or n?').toLowerCase();
if (hugs === 'y' || hugs === 'yes') {
  hugs = 'snuggly';
}
else if (hugs === 'n' || hugs === 'no'){
  hugs = 'serene';
}
else {
  alert('Well, then, I will have to choose!');
  hugs = 'ticklish';
}
console.log('pet hugs: ' + hugs);
alert('My new pet will be ' + hugs + '!');


var weight = prompt('Should I choose a pet that weighs more than 15 pounds?', 'y or n?').toLowerCase();
if (weight === 'y' || weight === 'yes') {
  weight = 'hefty';
}
else if (weight === 'n' || weight === 'no'){
  weight = 'sleek';
}
else {
  alert('My choice, then!');
  weight = 'robust';
}
console.log('pet weight: ' + weight);
alert('My new pet will be ' + weight + '!');
alert('Thanks! I am looking forward to adopting a ' + personality + ', ' + fur + ', ' + noise_level + ',  ' + hugs + ', and ' + weight + ' pet !!!');


//start game 2

alert('Let\'s play another game! This one is called \'Getting to Know You\'');

var born = prompt('I attended elementary school in Bellevue, Washington. Was I born in Washington State?', 'yes or no?');
if (born === 'yes' || born === 'y') {
  alert('Sorry, that\'s wrong, I was born in California!');
}
else if (born === 'no' || born === 'n'){
  alert('Right! I was born in California!');
}
else {
  alert('Sorry, that\'s wrong, I was born in California!');
}

var sports = prompt('I love sports. I am an avid NFL (Go Hawks!), NBA, and most Olympic sports fan! Did I play sports in Junior or Senior High School?', 'yes or no?');
if (sports === 'yes' || sports === 'y') {
  alert('Sorry, that\'s wrong, I cheered from the sidelines!');
}
else if (sports === 'no' || sports === 'n'){
  alert('Right! I supported the teams from the sidelines!');
}
else {
  alert('Sorry, that\'s wrong, I cheered from the sidelines!');
}

var university = prompt('I have always excelled in Math and Science and won several awards in High School. Did I major in Mathematics or a Natural Science in college?', 'yes or no?');
if (university === 'yes' || university === 'y') {
  alert('Sorry, that\'s wrong, I majored in History - remember I love a good story!');
}
else if (university === 'no' || university === 'n'){
  alert('Right! I majored in History and minored in Mathematics');
}
else {
  alert('Sorry, that\'s wrong, I majored in History');
}

var music = prompt('I enjoy many musical genres. I have been to \'Who\', \'Earth,Wind,& Fire\' and \'Loreena NcKennitt\' concerts; I have had season tickets to the Seattle Opera, and I have \'Sia\' and \'Flo-rida\' on my music app. Do I like country music?', 'yes or no');
if (music === 'yes' || music === 'y') {
  alert('Right! I like many country music songs and artists');
}
else if (music === 'no' || music === 'n'){
  alert('Sorry that\'s wrong! Country music is an awesome American musical genre that has the same roots as gospel and r&b music!');
}
else {
  alert('Sorry that\'s wrong! Country music is an awesome American musical genre');
}

var programming = prompt('Right now, I am studying javascript. Have I studied other programming languages?', 'yes or no');
if (programming === 'yes' || programming === 'y') {
  alert('Right! I have studied Ruby and Python!');
}
else if (programming === 'no' || programming === 'n'){
  alert('Sorry that\'s wrong! Sometimes I am a Rubyist or a Pythonista!');
}
else {
  alert('Sorry that\'s wrong! I have studied Ruby and Python!', 'yes or no');
}

//guessing a number game

alert('Okay, now for something a little different - let\'s play numeric guessing game!I am thinking of a random number between 1 and 25. You have 5 guesses to choose the right number. Let\'s get started');

var correct = Math.ceil((Math.random() * 26));

var tries = 4;
while (tries > 0) {
  var guess = prompt('Please guess a number between 1 and 25.');
  if (!guess) {
    alert('Oops! You broke my game!');
    break;
  }
  else if (guess > correct) {
    alert('Too high! Try again. You have ' + tries + ' guesses remaining!');
    console.log('correct: ' + correct + '  guess: ' + guess);
  }
  else if (guess < correct){
    alert('Too low! Try again. You have ' + tries + ' guesses remaining!');
    console.log('correct: ' + correct + '  guess: ' + guess);
  }
  else{
    alert('You won!');
    console.log('correct: ' + correct + '  guess: ' + guess);
    break;
  }
  tries--;
  The correct answer is ' + correct + '!'
}
alert('Better luck next time!'');
