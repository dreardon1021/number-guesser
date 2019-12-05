
for(var i = 0; i < document.querySelectorAll('.middle-left-input').length; i++){
document.querySelectorAll('.middle-left-input')[i].addEventListener('keyup', enableSubmitButton)
};


function enableSubmitButton(){
  var submitButton = document.querySelector('.submit-button');
  var inputFields = document.querySelectorAll('.middle-left-input');
    for(var i = 0; i < inputFields.length; i++){
    if (inputFields[i].value > 0){
       submitButton.disabled = true;
     } else {
      submitButton.disabled = false;
    };
  };
};
