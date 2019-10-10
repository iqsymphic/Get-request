'use strict';

function getDogImage(userNum) {
  if (userNum < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  } else if (userNum > 50) {
    return alert("Please choose a number equal or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  }
}
//function imageCondition() {
//  if 
//}

function watchForm() {
  $("#js-form").submit(event => {
    event.preventDefault();
    let userNumInput = $("#input-number").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(renderedImg => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });
  $(".results").removeClass("hidden");
}