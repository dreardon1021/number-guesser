document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener('click', addChallengers);
document.querySelector('.submit-form-button').addEventListener('click', clearGuessInput);
document.querySelector('form').addEventListener('keyup', enableSubmit);
document.querySelector('form').addEventListener('keyup', enableClearButton);

function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++){
    inputFields[i].value = null;
  };
  var submitButton = document.querySelector('.submit-form-button');
  var clearFormButton = document.querySelector('.clear-form-button')
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
  clearFormButton.setAttribute('disabled', "");
  clearFormButton.classList.remove('enable-button');
};

function addChallengers(){
  console.log('addNames')
  var nameInput1 = document.querySelector('.name-input1');
  var nameInput2 = document.querySelector('.name-input2');
  var guessInput1Field = document.querySelector('.guess-input1');
  var guessInput2Field = document.querySelector('.guess-input2');
  var challenger1 = nameInput1.value;
  var challenger2 = nameInput2.value;
  var guess1Input = guessInput1Field.value;
  var guess2Input = guessInput2Field.value;
  var challengerName1 = document.querySelector('.challenger-1-name');
  var challengerName2 = document.querySelector('.challenger-2-name');
  var guess1 = document.querySelector('.guess1');
  var guess2 = document.querySelector('.guess2');
  challengerName1.innerText = challenger1;
  challengerName2.innerText = challenger2;
  guess1.innerText = guess1Input;
  guess2.innerText = guess2Input;
};


function clearGuessInput() {
  var guessInputFields = document.querySelectorAll('.guess-input-field');
  var submitButton = document.querySelector('.submit-form-button');
  var clearFormButton = document.querySelector('.clear-form-button')
  var resetButton = document.querySelector('.reset-game')
  for (var i=0; i < guessInputFields.length; i++){
    guessInputFields[i].value = null;
  };
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
}


//Start of logic for BOOM!,numHigh, numLow

var currentNum = 56
var guessMessage1 = document.querySelector('.no-guesses1')

function user1Guess(challengerGuess){
  var guessInput1Field = document.querySelector('.guess-input1');
  var challengerGuess = guessInput1Field.value
  var guessMessage1 = document.querySelector('.no-guesses1')
  if(challengerGuess > currentNum){
    return 'That number is too high';
  } else if (challengerGuess < currentNum) {
    return 'That number is too low';
  } else if (challengerGuess === currentNum){
    return 'BOOM! Correct number!';
  };

};

function user2Guess(challengerGuess){
  var guessInput2Field = document.querySelector('.guess-input2');
  var challengerGuess = guessInput2Field.value
  if(challengerGuess > currentNum){
    return 'That number is too high';
  } else if (challengerGuess < currentNum) {
    return 'That number is too low';
  } else if (challengerGuess === currentNum){
    return 'BOOM! Correct number!';
  };
};
