document.querySelector('.clear-form-button').addEventListener('click', clearFormInput);

function clearFormInput() {
  var inputFields = document.querySelectorAll('.middle-left-input');
  for (var i=0; i < inputFields.length; i++){
    inputFields[i].value = null;
  }
}
