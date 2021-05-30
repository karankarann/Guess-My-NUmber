// Author: Karan oberoi
// e-mail: karan.oberoi@dal.ca
//
//Description: The website is basically a
//number guessing game :
//  -Stores the Score
//  -Stores the Highest Score of all games
//  -Tells if guessed number is too high or //   too low compared to actual number
//
//  Let's Begin

'use strict';

//Choosing a random number
let number = Math.trunc(Math.random() * 20) + 1;

//Storing the score
let highestScore = 0;
let score = 20;

//The page only acts up when clicked on check or Again button
console.log(document.querySelector('.number').textContent);
//Case I: Clicked on Check button
document.querySelector('.check').addEventListener('click', function () {
  //creating a varibale to store the guessed number
  let guessed = Number(document.querySelector('.guess').value);

  //Check if the guessed number is smaller, equal or bigger than the actual number + check if the user even guessed a number or not

  //if guessed nothing -> change message
  if (!guessed) {
    document.querySelector('.message').textContent =
      'Guess a Number, No number guessed';

    document.querySelector('.score').textContent = --score;
  } else {
    //if score is less than or equal to zero -> game Over
    if (score > 1) {
      //if guesed number too high
      if (guessed > number) {
        document.querySelector('.message').textContent = 'Too High';
        document.querySelector('.score').textContent = --score;
      }
      //if guessed number too low
      else if (guessed < number) {
        document.querySelector('.message').textContent = 'Too Low';

        document.querySelector('.score').textContent = --score;
      }
      //If guessed the right number
      else {
        document.querySelector('.message').textContent = '🥳 Correct Guess';

        document.querySelector('body').style.backgroundColor = '#55DD33';

        if (score > highestScore) {
          highestScore = score;
        }
        document.querySelector('.highscore').textContent = highestScore;

        //shows the correct number inpace of "?"
        document.querySelector('.number').textContent = number;
      }
    }
    //If score goes below 20 -> game over
    else {
      document.querySelector('.message').textContent =
        'Game Over :( ..\nHit Again button to try again.';
    }
  }
});

//Case II:
//  Clicking on again buttn resets everything but highscore
document.querySelector('.again').addEventListener('click', function () {
  //resets the score
  score = 20;
  document.querySelector('.score').textContent = '20';

  //changes the background color
  document.querySelector('body').style.backgroundColor = '#222';

  //changes the message too
  document.querySelector('.message').textContent = 'Start guessing...';

  //Also resets the number
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //restores the guess input field
  document.querySelector('.guess').value = '';
  console.log(document.querySelector('.guess').value);
});
