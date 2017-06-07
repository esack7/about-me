'use strict';
// This makes javascript run priority
var play = confirm('Do you want to play a game?');

if (play === true){
alert('Fun! Let\'s play!')
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

var ikeCollege = prompt('Did I graduated college with BS in Chemistry?');
//saves the user's response to the question about college. #1 question.

if (ikeCollege.toLowerCase() === 'no'|| ikeCollege.toLowerCase() === 'n'){
  alert('That\'s right! I did go to college, but unfortunately I dropped out.')
  } else {
        alert('That\'s wrong. I went to college right after High School to major in college, but I dropped out after a year and a half.');
      }
      console.log('When asked if user thought I graduated from college, user responded ' + ikeCollege);

var ikeWorkHistory = prompt('Is it true that I\'ve had a diverse amount of work experience including customer service, interpreting and applying Washington Administrative Code, making financial determinations, pubic speaking and performing, and cross-cultural exhanges.');
//saves user's response to question about my work diversity. #2 question.

if (ikeWorkHistory.toLowerCase() === 'yes' || ikeWorkHistory.toLowerCase() === 'y'){
  alert('That is right! I have worked as a receptionist, a Financial Specialist with DSHS, a lead worker for DSHS, a worship leader at my church, and a missionary to Mexico.');
} else {
  alert('That\'s wrong. I\'ve worked as a receptionist, a Financial Specialist with DSHS, a lead worker for DSHS, a worship leader at my church, and a missionary to Mexico.');
}
console.log('When asked if user thought I have a diverse work experience, user responded ' + ikeWorkHistory);

var ikeFood = prompt('Here\' a question that gets to the heart of the matter. Do you think I thoroughly enjoy eating?');
//saves user's response to question about me liking food. #3 question.

if (ikeFood.toLowerCase() === 'yes' || ikeFood.toLowerCase() === 'y'){
  alert('That is right! I love food!.');
} else {
  alert('That\'s wrong. I do truly love food!');
}

console.log('When asked if user thought I thoroughly enjoy food, user responded ' + ikeFood);

var ikeFirst = prompt('My first exposure to problem solving when it comes to computers was when I crashed my dad PC and spent all night getting it running again. Do you think this is true?');
//saves user's response to question about me and my first exposure to computer problem solving. #4 question.
if  (ikeFirst.toLowerCase() === 'yes' || ikeFirst.toLowerCase() === 'y'){
  alert('That is right! I didn\'t sleep that night, but by the time my dad left for work the next morning, it was up and running.');
} else {
  alert('That\'s wrong. I didn\'t sleep that night, but by the time my dad left for work the next morning, it was up and running.');
}
  console.log('When asked if user thought I in computer problem solving is true, user responded ' + ikeFirst);

var ikeFamily = prompt(userName + ', do I have 12 children?');
//saves user's response to question about my children. #5 question.

if  (ikeFamily.toLowerCase() === 'no' || ikeFamily.toLowerCase() === 'n'){
  alert('That is right! I have four children.  Twelve would be insanely too many for me!');
} else {
  alert('That\'s wrong. I have four children.  Twelve would be insanely too many for me!');
}

  console.log('When asked if user thought I have 12 children, user responded ' + ikeFamily);
