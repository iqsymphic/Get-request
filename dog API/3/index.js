'use strict';

function getDogImage() {
  fetch("https://dog.ceo/api/breed/" + formInput() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Breed of dog does not exist. Sorry"));
}

function watchForm() {
  $("#js-form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


function displayResults(responseJson) {
  if (responseJson.status != "success") {
    alert("Sorry! That breed does not exist!");
  } else if (responseJson.status === "success") {
    $(".results").replaceWith(
      `<img src="${responseJson.message}" class="results">`
    );
    $(".results").removeClass("hidden");
  }
}

function formInput() {
  let dogBreed = $("#dog-breed").val();
  return dogBreed;
}