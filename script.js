'use strict';
/*  $()
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
/////////////////////////////////
///////////// VARIABLES
/////////////////////////////////
var stopButton = document.querySelector('#stopButton');
var stopLight = document.querySelector('#stopLight');
var slowButton = document.querySelector('#slowButton');
var slowLight = document.querySelector('#slowLight');
var goButton = document.querySelector('#goButton');
var goLight = document.querySelector('#goLight');
var currentColor = document.querySelector('#currentColor');
var pixel = document.querySelector('#pixel');
var savedColor = '';


/////////////////////////////////
///////////// ON CLICK
/////////////////////////////////
stopButton.addEventListener('click', function() {
    if (stopLight.style['background-color'] === "red") {
        stopLight.style['background-color'] = "black";
    } else if (goLight.style['background-color'] === "green") {
        stopLight.style['background-color'] = "black";
        slowLight.style['background-color'] = "orange";
        goLight.style['background-color'] = "black";
        setTimeout(function() {
            stopLight.style['background-color'] = "red";
            slowLight.style['background-color'] = "black";
            goLight.style['background-color'] = "black";
        }, 5000);
    } else {
        stopLight.style['background-color'] = "red";
        slowLight.style['background-color'] = "black";
        goLight.style['background-color'] = "black";
    }
});

slowButton.addEventListener('click', function() {
    if (slowLight.style['background-color'] === "orange") {
        slowLight.style['background-color'] = "black";
    } else {
        stopLight.style['background-color'] = "black";
        slowLight.style['background-color'] = "orange";
        goLight.style['background-color'] = "black";
    }
});

goButton.addEventListener('click', function() {
    if (goLight.style['background-color'] === "green") {
        goLight.style['background-color'] = "black"
    } else {
        stopLight.style['background-color'] = "black";
        slowLight.style['background-color'] = "black";
        goLight.style['background-color'] = "green";
    }
});


/////////////////////////////////
///////////// MOUSEOVERS - INDIVIDUAL
/////////////////////////////////

// stopButton.addEventListener('mouseover', function(event) {
//   console.log("Entered " + event.target.innerText + " button");
// });
//
// slowButton.addEventListener('mouseover', function(event) {
//   console.log("Entered " + event.target.innerText + " button");
// });
//
// goButton.addEventListener('mouseover', function(event) {
//   console.log("Entered " + event.target.innerText + " button");
// });




/////////////////////////////////
///////////// MOUSEOUT - INDIVIDUAL
/////////////////////////////////
// stopButton.addEventListener('mouseout', function(event) {
//   console.log("Left " + event.target.innerText + " button");
// });
// slowButton.addEventListener('mouseout', function(event) {
//   console.log("Left " + event.target.innerText + " button");
// });
// goButton.addEventListener('mouseout', function(event) {
//   console.log("Left " + event.target.innerText + " button");
// });


/////////////////////////////////
///////////// GROUP LISTENER
/////////////////////////////////

document.getElementById('controls').addEventListener('click', function(event) {
    // If the target for the event was something other than 'controls (for example, a button), log the target's text content.
    if (event.target !== event.currentTarget) {
        console.log(event.target.textContent);
    }
});
document.getElementById('controls').addEventListener('mouseout', function(event) {
    if (event.target !== event.currentTarget) {
        console.log("Left " + event.target.innerText + " button");
    }
});
document.getElementById('controls').addEventListener('mouseover', function(event) {
    if (event.target !== event.currentTarget) {
        console.log("Entered " + event.target.innerText + " button");
    }
});
