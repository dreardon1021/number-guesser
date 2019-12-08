document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener('click', user1GuessConversion)
document.querySelector('.submit-form-button').addEventListener('click', passGuess1)
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




// Adds challenger names and guesses into respected HTML elements
function addChallengers(){
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
};

function enableSubmit() {
  var submitButton = document.querySelector('.submit-form-button');
  var gameForm = document.querySelector('form');
  if (gameForm.checkValidity() === true){
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('enable-button');
  } else if (gameForm.checkValidity() === false){
    submitButton.setAttribute('disabled', "");
    submitButton.classList.remove('enable-button');
    };
  };

function enableClearButton() {
  var clearFormButton = document.querySelector('.clear-form-button')
  var gameForm = document.querySelector('form');
      if (gameForm.length > 0){
      clearFormButton.removeAttribute('disabled');
      clearFormButton.classList.add('enable-button');
    } else if (gameForm.length === 0){
      clearFormButton.setAttribute('disabled', "");
      clearFormButton.classList.remove('enable-button');
    }
  };



// Feature guess Messages print for users

var currentNum = 56;


function user1GuessConversion() {
  var guessInput1Field = document.querySelector('.guess-input1');
  var guess1Input = guessInput1Field.value;
  // console.log(parseInt(guess1Input, 10))
  return parseInt(guess1Input, 10);
};


function passGuess1 () {
  var guessMessage1 = document.querySelector('.no-guesses1');
  console.log('passing');
    if(user1GuessConversion() > currentNum) {
      console.log('high message');
      guessMessage1.innerText = 'That number is too high';
    } else if (user1GuessConversion() < currentNum) {
      console.log('low message');
      guessMessage1.innerText = 'That number is too low';
    } else if (user1GuessConversion() === currentNum) {
      console.log('correct message');
      guessMessage1.innerText = 'BOOM! Correct number!';
    };
  };
