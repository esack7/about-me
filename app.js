'use strict';
// This makes javascript run priority
var correctAnswers = 0;
var play = confirm('Do you want to play a game?');

if (play === true) {
  alert('Fun! Let\'s play!');
} else {
  alert('Too bad! Let\'s play!');
}
console.log('When asked if user wants to play a game the response assigned to var play is ' + play);
//A little throw back to "War Games" movie.  Regardless if user wants to play, program will run.
var userName = prompt('What is your name, boss?');
console.log('User responded that name is ' + userName);
//asked users name and assigned it var userName
alert('Thanks! Nice to meet you ' + userName);

alert('Okay, I am going to ask you a series of 5 questions of which you are going to guess "yes" or "no".');
//an explanation of the game for the user

//Question 1
function question1() {
  var ikeCollege = prompt('Did I graduated college?');
//saves the user's response to the question about college. #1 question.

  if (ikeCollege.toLowerCase() === 'no' || ikeCollege.toLowerCase() === 'n'){
    alert('That\'s right! I did go to college, but unfortunately I dropped out.');
    correctAnswers++;
  } else {
    alert('That\'s wrong. I went to college right after High School, but I dropped out after a year and a half.');
  }
  console.log('When asked if user thought I graduated from college, user responded ' + ikeCollege);
}
question1();
console.log('Question 1 made into a function and then called function question1()');

//Question 2
function question2() {
  var ikeWorkHistory = prompt('Is it true that I\'ve had a diverse amount of work experience including customer service, interpreting and applying Washington Administrative Code, making financial determinations, pubic speaking and performing, and cross-cultural exhanges.');
//saves user's response to question about my work diversity. #2 question.

  if (ikeWorkHistory.toLowerCase() === 'yes' || ikeWorkHistory.toLowerCase() === 'y'){
    alert('That is right! I have worked as a receptionist, a Financial Specialist with DSHS, a lead worker for DSHS, a worship leader at my church, and a missionary to Mexico.');
    correctAnswers++;
  } else {
    alert('That\'s wrong. I\'ve worked as a receptionist, a Financial Specialist with DSHS, a lead worker for DSHS, a worship leader at my church, and a missionary to Mexico.');
  }
  console.log('When asked if user thought I have a diverse work experience, user responded ' + ikeWorkHistory);
}
question2();
console.log('Question 2 made into a function and then called function question2()');
//Question 3
function question3() {
  var ikeFood = prompt('Here\' a question that gets to the heart of the matter. Do you think I thoroughly enjoy eating?');
//saves user's response to question about me liking food. #3 question.

  if (ikeFood.toLowerCase() === 'yes' || ikeFood.toLowerCase() === 'y'){
    alert('That is right! I love food!.');
    correctAnswers++;
  } else {
    alert('That\'s wrong. I do truly love food!');
  }

  console.log('When asked if user thought I thoroughly enjoy food, user responded ' + ikeFood);
}
question3();
console.log('Question 3 made into a function and then called function question3()');
//Quuestion 4
function question4() {
  var ikeFirst = prompt('My first exposure to problem solving when it comes to computers was when I crashed my dad PC and spent all night getting it running again. Do you think this is true?');
//saves user's response to question about me and my first exposure to computer problem solving. #4 question.
  if (ikeFirst.toLowerCase() === 'yes' || ikeFirst.toLowerCase() === 'y'){
    alert('That is right! I didn\'t sleep that night, but by the time my dad left for work the next morning, it was up and running.');
    correctAnswers++;
  } else {
    alert('That\'s wrong. I didn\'t sleep that night, but by the time my dad left for work the next morning, it was up and running.');
  }
  console.log('When asked if user thought I in computer problem solving is true, user responded ' + ikeFirst);
}
question4();
console.log('Question 4 made into a function and then called function question4()');
//Question 5
function question5() {
  var ikeFamily = prompt(userName + ', do I have 12 children?');
//saves user's response to question about my children. #5 question.

  if (ikeFamily.toLowerCase() === 'no' || ikeFamily.toLowerCase() === 'n'){
    alert('That is right! I have four children.  Twelve would be insanely too many for me!');
    correctAnswers++;
  } else {
    alert('That\'s wrong. I have four children.  Twelve would be insanely too many for me!');
  }
  console.log('When asked if user thought I have 12 children, user responded ' + ikeFamily);
}
question5();
console.log('Question 5 made into a function and then called function question5()');
alert('Now, ' + 'let\'s try a couple more questions that aren\'t yes or no questions!');

// Question 6
// Game where the user guesses how many siblings I have.
function question6() {
  var correctSiblings = 5;
  var correct = false;
  var ikeSiblings;
  var attempts = 0;

  do { ikeSiblings = parseInt(prompt('How many siblings do you think I have?'));
    console.log('User guessed I have ' + ikeSiblings + ' siblings');
    attempts++;
    if (ikeSiblings > 10) {
      alert('That is too high. You are very cold.');

    } else if (ikeSiblings > 5) {
      alert('That is too high. You are cold.');

    } else if (ikeSiblings < 1) {
      alert('That is too low. You are very cold');

    } else if (ikeSiblings < 5) {
      alert('That is too low. You are cold');

    } else if (ikeSiblings === correctSiblings) {
      alert('You are correct');
      correct = true;
      correctAnswers++;
    }

  } while (attempts <= 3 && correct === false);
  correctSiblings++;
  alert('I am one of ' + correctSiblings + ' kids');
  console.log('The user was correct: ' + correct);
}
question6();
console.log('Question 6 made into a function and then called function question6()');
//End of game guessing siblings.

function question7() {
//Start of game to guess my nick names.
  var ikeNickNames = ['ike', 'spike', 'spud', 'a-bomb', 'esack', 'eyes'];
  var guesses = 0;
  var nameGuess;

  do {
    var nameGuess = prompt('Can you guess one of my nick names? You get six tries!');
    guesses++;
    console.log('User guessed that my nick name is ' + nameGuess);
    if (ikeNickNames.indexOf(nameGuess.toLowerCase()) >= 0) {
      alert('Wow. Great job!');
      correctAnswers++;
      break;
    } else {
      alert('Nobody has ever called me that. Try again!');
    }
  } while (guesses <= 5);

  alert ('My nick names are ' + ikeNickNames[0] + ', ' + ikeNickNames[1] + ', ' + ikeNickNames[2] + ', ' + ikeNickNames[3] + ', ' + ikeNickNames[4] + ', ' + ikeNickNames[5] + '.');
// Letting user know my nick names.
}
question7();
console.log('Question 7 made into a function and then called function question7()');
alert('Thanks for playing!  You got ' + correctAnswers + ' out of 7.');
// Letting the user know how they scored on the games.
