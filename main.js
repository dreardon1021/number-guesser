document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener ('click', engageSubmitListeners);
document.querySelector('.challenger-form').addEventListener('keyup', enableButtons);
document.querySelector('.update-button').addEventListener('click', updateRange);
document.querySelector('.range-form').addEventListener('keyup', invokeUpdateHandler);
document.querySelector('.column-right').addEventListener('click', closeCard);

var challengerName1 = document.querySelector('.challenger-1-name');
var challengerName2 = document.querySelector('.challenger-2-name');
var clearFormButton = document.querySelector('.clear-form-button');
var count = 0;
var currentNum = Math.floor(Math.random() * 100 + 1);
var gameForm = document.querySelector('.challenger-form');
var guess1 = document.querySelector('.guess1');
var guess2 = document.querySelector('.guess2');
var guessInput1Field = document.querySelector('.guess-input1');
var guessInput2Field = document.querySelector('.guess-input2');
var maxRangeInput = document.querySelector('.max-range');
var minRangeInput = document.querySelector('.min-range');
var nameInput1 = document.querySelector('.name-input1');
var nameInput2 = document.querySelector('.name-input2');
var rangeMaxNum = 100;
var rangeMinNum = 1;
var submitButton = document.querySelector('.submit-form-button');


//event handler functions
function engageSubmitListeners() {
  countClicks();
  user1GuessConversion();
  passGuess1();
  showRangeErrorC1();
  user2GuessConversion();
  passGuess2();
  showRangeErrorC2();
  createCard();
  addChallengers();
  addWinner();
  resetGame();
  clearGuessInput();
};

function enableButtons() {
  enableSubmit();
  enableClearButton();
};

function invokeUpdateHandler() {
  convertMin();
  convertMax();
  enableUpdate();
  showMinError();
};

function updateRange() {
  convertMin();
  convertMax();
  changeRange();
  printRange();
};

function closeCard(event) {
  if(event.target.classList.contains('close-button')) {
    event.target.parentNode.parentNode.remove();
  };
};


// clears form funtion
function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++) {
    inputFields[i].value = '';
  };
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
  clearFormButton.setAttribute('disabled', "");
  clearFormButton.classList.remove('enable-button');
};


// Adds challenger names and guesses into respected HTML elements
function addChallengers(){
  var challenger1 = nameInput1.value;
  var challenger2 = nameInput2.value;
  var guess1Input = guessInput1Field.value;
  var guess2Input = guessInput2Field.value;
  challengerName1.innerText = challenger1;
  challengerName2.innerText = challenger2;
  guess1.innerText = guess1Input;
  guess2.innerText = guess2Input;
};

//Clear guess input on submit
function clearGuessInput() {
  var guessInputFields = document.querySelectorAll('.guess-input-field');
  var resetButton = document.querySelector('.reset-game');
  for (var i=0; i < guessInputFields.length; i++){
    guessInputFields[i].value = '';
  };
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
};

//enable sumbit buttons with form validiity
function enableSubmit() {
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
      if (gameForm.length > 0) {
      clearFormButton.removeAttribute('disabled');
      clearFormButton.classList.add('enable-button');
    } else if (gameForm.length === 0) {
      clearFormButton.setAttribute('disabled', "");
      clearFormButton.classList.remove('enable-button');
    };
  };

function convertMin() {
  var rangeMinInput = minRangeInput.value;
  return rangeMinNum = parseInt(rangeMinInput, 10);
};

function convertMax() {
  var rangeMaxInput = maxRangeInput.value;
  return rangeMaxNum = parseInt(rangeMaxInput, 10);
};

function changeRange() {
  currentNum = Math.floor(Math.random() * (rangeMaxNum - rangeMinNum) + rangeMinNum);
};

function printRange() {
    var minValue = minRangeInput.value;
    var maxValue = maxRangeInput.value;
    var minElement = document.querySelector('.range-min');
    var maxElement = document.querySelector('.range-max');
    minElement.innerText = minValue;
    maxElement.innerText = maxValue;
  };


//Range Error!
function showMinError() {
  var errorMessage = document.querySelector('.min-error-message');
  if(convertMin() > convertMax()) {
    console.log('error')
    errorMessage.style.display = 'flex';
    minRangeInput.style.border = '2px solid #dd1972';
  } else if (convertMin() < convertMax()) {
    console.log('no error')
    errorMessage.style.display = 'none';
    minRangeInput.style.border = '1px solid #d1d2d4'
  };
};

// Guess messages print for users
function user1GuessConversion() {
  var guess1Input = guessInput1Field.value;
  return parseInt(guess1Input, 10);
};

function user2GuessConversion() {

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


  //add button counter
  function countClicks() {
    count += 2;
    console.log(count);
  };


//disaply winner cards
function createCard() {
  var winnerCard = document.querySelector('.challenge-outcome');
  var rightColumn = document.querySelector('.column-right');
  if(user1GuessConversion() === currentNum || user2GuessConversion() === currentNum) {
    rightColumn.insertAdjacentHTML('afterbegin',
    `<article class="challenge-outcome">
      <div class="co-names">
        <h3 class="c-text c1-name">CHALLENGER 1 NAME</h3>
        <p class="vs">vs.</p>
        <h3 class="c-text c2-name">CHALLENGER 2 NAME</h3>
      </div>
      <div class="mid-challenge-flex">
        <hr class="challenge-line">
        <p class="c-text c-name">CHALLENGER 2 NAME</p>
        <p class="c-text winner">WINNER</p>
        <hr class="challenge-line">
      </div>
      <div class="outcome-bottom">
        <p class="c-text"><strong class="click-number">23</strong> Guesses</p>
        <p class="c-text"> <strong>1</strong> Minute <strong>35</strong> Seconds</p>
        <button class="close-button"type="button" name="button"></button>
      </div>
    </article>`);
  };
};

function addWinner() {
  var challenger1Name = document.querySelector('.c1-name');
  var challenger2Name = document.querySelector('.c2-name');
  var winnerName = document.querySelector('.c-name');
  var challenger1Value = nameInput1.value;
  var challenger2Value = nameInput2.value;
  var clickNumber = document.querySelector('.click-number');
  if(user1GuessConversion() === currentNum) {
    challenger1Name.innerText = challenger1Value;
    challenger2Name.innerText = challenger2Value;
    winnerName.innerText = challenger1Value;
    console.log(count)
    clickNumber.innerText = count;
  } else if(user2GuessConversion() === currentNum) {
    challenger1Name.innerText = challenger1Value;
    challenger2Name.innerText = challenger2Value;
    winnerName.innerText = challenger2Value;
    clickNumber.innerText = count;
  };
};

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

function enableUpdate() {
  var updateButton = document.querySelector('.update-button');
  if (rangeMaxNum > rangeMinNum){
    updateButton.removeAttribute('disabled');
    updateButton.classList.add('enable-button');
  } else if (rangeMinNum > rangeMaxNum){
    updateButton.setAttribute('disabled', "");
    updateButton.classList.remove('enable-button');
  };
};

function resetGame() {
  if (user1GuessConversion() === currentNum || user2GuessConversion() === currentNum) {
    clearFormInput();
    changeRange();
    console.log(currentNum);
    count = 0;
  };
};
