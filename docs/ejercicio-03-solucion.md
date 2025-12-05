# Solución – Ejercicio 3: Par o impar

Pedir un número entero y decir si es par o impar.

```js
const entrada = prompt("Ingresa un número entero:");
const numero = Number(entrada);

if (!Number.isInteger(numero)) {
  console.log("Debes ingresar un número entero válido.");
} else if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}
```