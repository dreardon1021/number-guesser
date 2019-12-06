
for(var i = 0; i < document.querySelectorAll('.middle-left-input').length; i++){
document.querySelectorAll('.middle-left-input')[i].addEventListener('keypress', enableSubmitButton)
};


// function enableSubmitButton(){
//   var submitButton = document.querySelector('.submit-button');
//   var inputFields = document.querySelectorAll('.middle-left-input');
//     for(var i = 0; i < inputFields.length; i++){
//     console.log(inputFields[i])
//     if (inputFields[i].value < 5){
//        submitButton.disabled = true;
//      } else {
//       submitButton.disabled = false;
//     };
//   };
// };

function enableSubmitButton(){
  var submitButton = document.querySelector('.submit-button');
  var inputFields = document.querySelectorAll('.middle-left-input');
    for(var i = 0; i < inputFields.length; i++){
    console.log('inputFields:', inputFields);
    console.log('inputFields[i]:', inputFields[i]);
    console.log('inputFields[i].value:', inputFields[i].value);
    if (inputFields[i].value.length < 1){
       console.log('inputFields[i].value:', inputFields[i].value);
       submitButton.disabled = true;
     } else {
      submitButton.disabled = false;
    };
  };
};
