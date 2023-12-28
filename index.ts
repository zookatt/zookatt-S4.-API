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

function mostrarDatosApi() {//primera api de chistes
  fetch("https://icanhazdadjoke.com/",  {
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

function mostrarDatosApiChuck() {//segunda api de chistes
  fetch("https://api.chucknorris.io/jokes/random",  {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      currentJoke = {
        joke: data.value,
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
    const random:number = Math.floor(Math.random() * 10); //Anadi Math.random para alternar los APIS
    if(random<=5){ 
      mostrarDatosApi();
    }else{
      mostrarDatosApiChuck();
    }
    
  });
}

mostrarDatosApi();



const weather: HTMLElement = document.getElementById('tiempo')!;

function mostrarDatosTiempo() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        const currentTemperature = data.current.temperature_2m;
        weather.innerHTML = `Temperatura actual: ${currentTemperature}°C`;
        console.log(data.current);
    })
    .catch(error => {
        console.error('Error al obtener datos meteorológicos:', error);
    });
}

mostrarDatosTiempo();