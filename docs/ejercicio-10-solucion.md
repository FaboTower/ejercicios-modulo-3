# Solución – Ejercicio 10: Comparador de 3 números

Decidir cuál es el mayor de tres números o si hay empate.

```js
const a = Number(prompt("Ingresa el número A:"));
const b = Number(prompt("Ingresa el número B:"));
const c = Number(prompt("Ingresa el número C:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Debes ingresar solo números válidos.");
} else if (a === b && b === c) {
  console.log("Los tres números son iguales.");
} else if (a > b && a > c) {
  console.log("El mayor es A:", a);
} else if (b > a && b > c) {
  console.log("El mayor es B:", b);
} else if (c > a && c > b) {
  console.log("El mayor es C:", c);
} else {
  console.log("Hay al menos dos números iguales compartiendo el mayor valor.");
}
```