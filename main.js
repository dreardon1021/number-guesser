document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener('click', clearGuessInput);

function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++){
    inputFields[i].value = null;
  }
}

function clearGuessInput() {
  var guessInputFields = document.querySelectorAll('.guess-input-field');
  for (var i=0; i < guessInputFields.length; i++){
    guessInputFields[i].value = null;
  }
}
