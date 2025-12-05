# Solución – Ejercicio 1: Clasificador de edad simple

Pedir la edad del usuario y mostrar si es mayor o menor de edad.

```js
const entrada = prompt("Ingresa tu edad:");

const edad = Number(entrada);

if (isNaN(edad)) {
  console.log("Debes ingresar un número válido.");
} else if (edad < 18) {
  console.log("Eres menor de edad.");
} else {
  console.log("Eres mayor de edad.");
}
```