"use strict";

const joke = document.getElementById("jokeFixed");
const button = document.querySelector("button");
button.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarDatosApi();
});
function mostrarDatosApi() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        joke.innerHTML = data.joke;
    });
}
mostrarDatosApi();
