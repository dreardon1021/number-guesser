document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener ('click', engageSubmitListeners);
document.querySelector('form').addEventListener('keyup', enableButtons);
document.querySelector('.update-button').addEventListener('click', updateRange);

//event handler functions
function engageSubmitListeners() {
  user1GuessConversion();
  passGuess1();
  showRangeErrorC1();
  user2GuessConversion();
  passGuess2();
  showRangeErrorC2();
  addC1Winner();
  addC2Winner();
  addChallengers();
  clearGuessInput();
};

function enableButtons() {
  enableSubmit();
  enableClearButton();
};

function updateRange() {
  printRange();
  convertMin();
  convertMax();
  changeRange();
  showMinError();
  showMaxError();
};

// clears form funtion
function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++){
    inputFields[i].value = '';
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

//Clear guess input on submit
function clearGuessInput() {
  var guessInputFields = document.querySelectorAll('.guess-input-field');
  var submitButton = document.querySelector('.submit-form-button');
  var clearFormButton = document.querySelector('.clear-form-button');
  var resetButton = document.querySelector('.reset-game');
  for (var i=0; i < guessInputFields.length; i++){
    guessInputFields[i].value = '';
  };
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
};

//enable sumbit buttons with form validiity
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

//enable clear buttons on form validiity
function enableClearButton() {
  var clearFormButton = document.querySelector('.clear-form-button');
  var gameForm = document.querySelector('form');
      if (gameForm.length > 0){
      clearFormButton.removeAttribute('disabled');
      clearFormButton.classList.add('enable-button');
    } else if (gameForm.length === 0){
      clearFormButton.setAttribute('disabled', "");
      clearFormButton.classList.remove('enable-button');
    };
  };

//Generate Random number based on range and prints for user
var currentNum = Math.floor(Math.random() * 100 + 1);
var rangeMinNum;
var rangeMaxNum;


function convertMin() {
  var rangeMinInputField = document.querySelector('.min-range');
  var rangeMinInput = rangeMinInputField.value;
  rangeMinNum = parseInt(rangeMinInput, 10);
};

function convertMax() {
  var rangeMaxInputField = document.querySelector('.max-range');
  var rangeMaxInput = rangeMaxInputField.value;
  rangeMaxNum = parseInt(rangeMaxInput, 10);
};

function changeRange() {
  currentNum = Math.floor(Math.random() * (rangeMaxNum - rangeMinNum) + rangeMinNum);
};

function printRange() {
    var minRangeInput = document.querySelector('.min-range');
    var maxRangeInput = document.querySelector('.max-range');
    var minValue = minRangeInput.value;
    var maxValue = maxRangeInput.value;
    var minElement = document.querySelector('.range-min');
    var maxElement = document.querySelector('.range-max');
    minElement.innerText = minValue;
    maxElement.innerText = maxValue;
  };


//Range Error!
function showMinError() {
  var minRangeInput = document.querySelector('.min-range');
  var maxRangeInput = document.querySelector('.max-range');
  var minValue = minRangeInput.value;
  var maxValue = maxRangeInput.value;
  var errorMessage = document.querySelector('.min-error-message');
  if(minValue > maxValue) {
    errorMessage.style.display = 'flex';
    minRangeInput.style.border = '2px solid #dd1972';
  };
};

// Guess messages print for users
function user1GuessConversion() {
  var guessInput1Field = document.querySelector('.guess-input1');
  var guess1Input = guessInput1Field.value;
  return parseInt(guess1Input, 10);
};

function user2GuessConversion() {
  var guessInput2Field = document.querySelector('.guess-input2');
  var guess1Input = guessInput2Field.value;
  return parseInt(guess1Input, 10);
};

function passGuess1() {
  var guessMessage1 = document.querySelector('.no-guesses1');
  var challenger1Name = document.querySelector('.c1-name');
  var challenger2Name = document.querySelector('.c2-name');
    if(user1GuessConversion() > currentNum) {
      guessMessage1.innerText = 'That number is too high';
    } else if (user1GuessConversion() < currentNum) {
      guessMessage1.innerText = 'That number is too low';
    } else if (user1GuessConversion() === currentNum) {
      guessMessage1.innerText = 'BOOM! Correct number!';
    };
  };

function passGuess2() {
  var guessMessage2 = document.querySelector('.no-guesses2');
    if(user2GuessConversion() > currentNum) {
      guessMessage2.innerText = 'That number is too high';
    } else if (user2GuessConversion() < currentNum) {
        guessMessage2.innerText = 'That number is too low';
    } else if (user2GuessConversion() === currentNum) {
      guessMessage2.innerText = 'BOOM! Correct number!';
    };
  };

//disaply winner cards
function addC1Winner() {
  var challenger1Name = document.querySelector('.c1-name');
  var challenger2Name = document.querySelector('.c2-name');
  var winnerName = document.querySelector('.c-name');
  var nameInputOne = document.querySelector('.name-input1');
  var nameInputTwo = document.querySelector('.name-input2');
  var challenger1Value = nameInputOne.value;
  var challenger2Value = nameInputTwo.value;
  var winnerCard = document.querySelector('.challenge-outcome');
  if(user1GuessConversion() === currentNum) {
    challenger1Name.innerText = challenger1Value;
    challenger2Name.innerText = challenger2Value;
    winnerName.innerText = challenger1Value;
    winnerCard.style.visibility = "visible";
  };
};

function addC2Winner() {
  var challenger1Name = document.querySelector('.c1-name');
  var challenger2Name = document.querySelector('.c2-name');
  var winnerName = document.querySelector('.c-name');
  var nameInputOne = document.querySelector('.name-input1');
  var nameInputTwo = document.querySelector('.name-input2');
  var challenger1Value = nameInputOne.value;
  var challenger2Value = nameInputTwo.value;
  var winnerCard = document.querySelector('.challenge-outcome');
  if(user2GuessConversion() === currentNum) {
    challenger1Name.innerText = challenger1Value;
    challenger2Name.innerText = challenger2Value;
    winnerName.innerText = challenger2Value;
    winnerCard.style.visibility = "visible";
  };
};


//add button counter
var submitButton = document.querySelector('.submit-form-button'), count = 0;

submitButton.onclick = function countClicks() {
  var clickNumber = document.querySelector('.click-number');
  count += 1;
  clickNumber.innerText = count;
}


function showRangeErrorC1() {
var rangeError = document.querySelector('.challenger-1-range-error');
  if (user1GuessConversion() < rangeMinNum){
    rangeError.style.visibility = 'visible';
  } else if (user1GuessConversion() > rangeMaxNum){
    rangeError.style.visibility = 'visible';
  } else {
    rangeError.style.visibility = 'hidden';
  };
};

function showRangeErrorC2() {
var rangeError = document.querySelector('.challenger-2-range-error');
  if (user2GuessConversion() < rangeMinNum){
    rangeError.style.visibility = 'visible';
  } else if (user2GuessConversion() > rangeMaxNum){
    rangeError.style.visibility = 'visible';
  } else {
    rangeError.style.visibility = 'hidden';
  };
};
