let codigoDesactivacion = Math.floor(Math.random() * 9) + 1;
let numIntentos = 0;
const numIntentosMax = 4;

function desactivarBomba() {
  const numero = prompt("Ingresa un número del 1 al 9 para desactivar la bomba:");
  if (numero == codigoDesactivacion) {
    alert("Bomba desactivada. ¡Felicidades!");
    return;
  }
  numIntentos++;
  if (numIntentos == numIntentosMax) {
    const imgExplosion = document.createElement("img");
    imgExplosion.src = "explosion.jpg";
    document.body.appendChild(imgExplosion);
    alert("BOOM! La bomba ha explotado. Lo siento, perdiste.");
    return;
  }
  alert("Número incorrecto. Intenta de nuevo.");
  desactivarBomba();
}

desactivarBomba();
