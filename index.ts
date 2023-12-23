

// En este primer ejercicio crearemos la pantalla principal que mostrará chistes al usuario/a.
// El funcionamiento debe ser el siguiente:
// - Al iniciar se mostrará el primer chiste por pantalla y el botón de siguiente chiste.
// - Al pulsar el botón de “Siguiente chiste” se hará fetch a la API de chistes y se mostrará por consola y por pantalla el chiste.

const joke: HTMLElement | null = document.getElementById("jokeFixed");
const button: HTMLButtonElement | null = document.querySelector("button");

function mostrarDatosApi(){
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then (res => res.json())
    .then (data=>{
        console.log(data);
        if (joke){
           joke.innerHTML = data.joke; 
        }
        
    })
}


if (button){
    button.addEventListener('click', (e:MouseEvent)=>{
        e.preventDefault();
        mostrarDatosApi();
     })
}


mostrarDatosApi();