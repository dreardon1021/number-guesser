var inputFields = document.querySelectorAll('.middle-left-input');
var submitButton = document.querySelector('.submit-button');


for(var i = 0; i < inputFields.length; i++){
inputFields[i].addEventListener('keyup', enableSubmitButton)
};


function enableSubmitButton(){
    for(var i = 0; i < inputFields.length; i++){
    if (inputFields[i].value > 0){
       submitButton.disabled = true;
     } else {
      submitButton.disabled = false;
    };
  };
};










// funtion activateDeactivate() {


//   };
//   if (nameGuessInput.length < 1){
//     submitButton.setAttribute = ('disabled', 'disabled');
//     console.log(disable)
//   } else {
//     submitButton.removeAttribute = ('disabled');
//     console.log(enable)
//   };
// };





// submitButton.addEventListener('click', poof)

// function poof(){
//   for(var i = 0; i < nameGuessInput.length; i++){
//   nameGuessInput[i].style.display = 'none'
//   };
// };


// submitButton.addEventListener('change', enableSubmit)


// function enableSubmit(){
// if (nameGuessInput.length < 1){
//   submitButton.setAttribute = ('disabled', 'disabled');
//   console.log(disable)
// } else {
//   submitButton.removeAttribute = ('disabled');
//   console.log(enable)
//    };
// };
