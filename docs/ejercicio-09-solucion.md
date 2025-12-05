# Solución – Ejercicio 9: Cara o cruz (una ronda)

El usuario elige "cara" o "cruz", el programa lanza una moneda.

```js
let eleccion = prompt('Elige "cara" o "cruz":');

if (eleccion === null) {
  console.log("Juego cancelado.");
} else {
  eleccion = eleccion.toLowerCase();

  if (eleccion !== "cara" && eleccion !== "cruz") {
    console.log('Debes ingresar "cara" o "cruz".');
  } else {
    const numero = Math.floor(Math.random() * 2); // 0 o 1
    let resultado;

    if (numero === 0) {
      resultado = "cara";
    } else {
      resultado = "cruz";
    }

    console.log("Tu elección:", eleccion);
    console.log("La moneda salió:", resultado);

    if (eleccion === resultado) {
      console.log("¡Ganaste! 🎉");
    } else {
      console.log("Perdiste 😢");
    }
  }
}
```