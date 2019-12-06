document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);
document.querySelector('.submit-form-button').addEventListener('click', clearGuessInput);
document.querySelector('form').addEventListener('keyup', enableSubmit);


function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++){
    inputFields[i].value = null;
  }
}

function clearGuessInput() {
  var guessInputFields = document.querySelectorAll('.guess-input-field');
  var submitButton = document.querySelector('.submit-form-button');
  for (var i=0; i < guessInputFields.length; i++){
    guessInputFields[i].value = null;
  };
  submitButton.setAttribute('disabled', "");
  submitButton.classList.remove('enable-button');
}

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
