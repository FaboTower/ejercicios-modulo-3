# Solución – Ejercicio 4: Saludo según hora

Pedir una hora (0 a 23) y saludar según el rango.

```js
const entrada = prompt("Ingresa la hora (0 a 23):");
const hora = Number(entrada);

if (isNaN(hora)) {
  console.log("Debes ingresar un número válido.");
} else if (hora < 0 || hora > 23) {
  console.log("La hora debe estar entre 0 y 23.");
} else if (hora >= 5 && hora <= 11) {
  console.log("¡Buenos días!");
} else if (hora >= 12 && hora <= 18) {
  console.log("¡Buenas tardes!");
} else {
  console.log("¡Buenas noches!");
}
```