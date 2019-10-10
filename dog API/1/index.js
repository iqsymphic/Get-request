'use strict';

function getDogImage(userNum) {
  if (userNum < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  } else if (userNum > 50) {
    return alert("Choose 50 or less");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}
//function imageCondition() {
//  if 
//}

function watchForm() {
  $("#js-form").submit(event => {
    event.preventDefault();
    let userNumInput = $("input-number").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
