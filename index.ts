const reportAcudits: Joke[] = [];

interface Joke {
  joke: string;
  score: number;
  date: string;
}

let currentJoke: Joke;
const jokeFixed: HTMLElement = document.getElementById("jokeFixed")!;
const button: HTMLButtonElement = document.querySelector("button")!;

const vote1: HTMLButtonElement = document.getElementById('1') as HTMLButtonElement;
const vote2: HTMLButtonElement = document.getElementById('2') as HTMLButtonElement;
const vote3: HTMLButtonElement = document.getElementById('3') as HTMLButtonElement;

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


vote1.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  currentJoke.score = 1;
  reportAcudits.push(currentJoke);
  console.log(reportAcudits);
});

vote2.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  currentJoke.score = 2;
  reportAcudits.push(currentJoke);
  console.log(reportAcudits);
});

vote3.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  currentJoke.score = 3;
  reportAcudits.push(currentJoke);
  console.log(reportAcudits);
});

if (button) {
  button.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    mostrarDatosApi();
  });
}

mostrarDatosApi();