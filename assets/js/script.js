"use strict";

const _API = 'https://api.db-ip.com/v2/free/self';

document.addEventListener("DOMContentLoaded", init)


function init() {
    document.querySelector("#secret-page").addEventListener("click", loadHackermans());
}

function nextPage(e) {
    e.preventDefault();
    location.href = 'https://jurgini.github.io/main/secret.html';
}


// fetch https://api.db-ip.com/v2/free/self and console log the result


fetch("https://api.db-ip.com/v2/free/self")
    .then(response => response.json())
    .then(data => document.querySelector("#ip-address").innerHTML = JSON.stringify(data.ipAddress))
    .then(data => document.querySelector("#continent-name").innerHTML = JSON.stringify(data.continentName))
    .then(data => document.querySelector("#country").innerHTML = JSON.stringify(data.countryName));

//parse the data to #information
function loadHackermans() {
    console.log("loadHackermans");
    
    
}


