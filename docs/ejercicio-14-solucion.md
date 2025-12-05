# Solución – Ejercicio 14: Mayor o menor (número aleatorio)

El usuario predice si el número siguiente será mayor o menor que el primero.

```js
const base = Math.floor(Math.random() * 10) + 1;
console.log("Número base:", base);

let prediccion = prompt(
  `El número base es ${base}. ¿El siguiente será "mayor" o "menor"?`
);

if (!prediccion) {
  console.log("Juego cancelado.");
} else {
  prediccion = prediccion.toLowerCase();

  if (prediccion !== "mayor" && prediccion !== "menor") {
    console.log('Debes escribir "mayor" o "menor".');
  } else {
    const nuevo = Math.floor(Math.random() * 10) + 1;
    console.log("Número nuevo:", nuevo);

    if (nuevo === base) {
      console.log("Los números son iguales: nadie gana, es empate.");
    } else if (
      (prediccion === "mayor" && nuevo > base) ||
      (prediccion === "menor" && nuevo < base)
    ) {
      console.log("¡Adivinaste! 🎉");
    } else {
      console.log("No acertaste 😢");
    }
  }
}
```