'use strict';

function getDogImage(numInput) {
  //TODO: finish
  if (numInput < 3) {
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
  }
  else if (numInput > 50) {
    return alert("Either choose 50 or less than 50");
  }
  else {
  fetch('https://dog.ceo/api/breeds/image/random/${numInput}')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
  }
}
//function imageCondition() {
//  if 
//}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userNumInput = $("input-number").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
