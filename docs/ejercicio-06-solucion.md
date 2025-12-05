# Solución – Ejercicio 6: Clasificador de notas

Pedir una nota (1 a 7) y clasificarla según el rango.

```js
const entrada = prompt("Ingresa tu nota (1 a 7):");
const nota = Number(entrada);

if (isNaN(nota)) {
  console.log("Debes ingresar un número válido.");
} else if (nota < 1 || nota > 7) {
  console.log("La nota debe estar entre 1 y 7.");
} else if (nota >= 6) {
  console.log("Excelente 🏆");
} else if (nota >= 5) {
  console.log("Bueno 🙂");
} else if (nota >= 4) {
  console.log("Suficiente 😅");
} else {
  console.log("Insuficiente ❌");
}
```