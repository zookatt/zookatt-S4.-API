"use strict";
const reportAcudits = [];
let currentJoke;
const jokeFixed = document.getElementById("jokeFixed");
const button = document.querySelector("button");
const vote1 = document.getElementById('1');
const vote2 = document.getElementById('2');
const vote3 = document.getElementById('3');
function mostrarDatosApi() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        currentJoke = {
            joke: data.joke,
            score: 0,
            date: new Date().toISOString(),
        };
        if (jokeFixed) {
            jokeFixed.innerHTML = `" ${currentJoke.joke} "`;
        }
    });
}
vote1.addEventListener("click", (e) => {
    e.preventDefault();
    currentJoke.score = 1;
    reportAcudits.push(currentJoke);
    console.log(reportAcudits);
});
vote2.addEventListener("click", (e) => {
    e.preventDefault();
    currentJoke.score = 2;
    reportAcudits.push(currentJoke);
    console.log(reportAcudits);
});
vote3.addEventListener("click", (e) => {
    e.preventDefault();
    currentJoke.score = 3;
    reportAcudits.push(currentJoke);
    console.log(reportAcudits);
});
if (button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarDatosApi();
    });
}
mostrarDatosApi();
