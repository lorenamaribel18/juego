console.log("¡Hola Mundo!");

let intentos = 6;
let lista = ["PROGRAMANDO"];
let posicion = Math.floor(Math.random() * lista.length);
let palabra = lista[posicion];

console.log("Palabra a adivinar:", palabra);

const INPUT = document.getElementById("guess-input");
const BOTON = document.getElementById("guess-button");

BOTON.addEventListener("click", intentar);

function intentar() {
    const intento = leerIntento();
    const GRID = document.getElementById("grid");

    const ROW = document.createElement("div");
    ROW.className = "row"; 

    intentos--;
    console.log("Te quedan", intentos, "intentos");

    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter"; // Asignar clase 'letter' para estilo CSS
        SPAN.textContent = intento[i] || ''; // Mostrar la letra intentada o dejar vacío

        if (intento[i] === palabra[i]) {
            SPAN.style.backgroundColor = "green"; // Letra correcta en la posición correcta
        } else if (palabra.includes(intento[i])) {
            SPAN.style.backgroundColor = "yellow"; // Letra correcta pero en posición incorrecta
        } else {
            SPAN.style.backgroundColor = "gray"; // Letra incorrecta
        }

        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    if (intento === palabra) {
        terminar("<h1>¡GANASTE! </h1>");
    }

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! </h1> La palabra era: " + palabra);
    }

}

function leerIntento() {
    return INPUT.value.toUpperCase().trim(); // Convertir a mayúsculas y eliminar espacios
}

function terminar(mensaje) {
    const estado = document.getElementById("guesses");
    INPUT.disabled = true;
    BOTON.disabled = true;
    estado.innerHTML = mensaje;
    console.log(estado, mensaje);
}
