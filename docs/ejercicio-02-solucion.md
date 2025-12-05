# Solución – Ejercicio 2: ¿Aprobó o reprobó?

Pedir una nota (1 a 7) y decir si aprobó (>= 4) o reprobó.

```js
const entrada = prompt("Ingresa tu nota (1 a 7):");
const nota = Number(entrada);

if (isNaN(nota)) {
  console.log("Debes ingresar un número válido.");
} else if (nota < 1 || nota > 7) {
  console.log("La nota debe estar entre 1 y 7.");
} else if (nota >= 4) {
  console.log("Aprobado ✅");
} else {
  console.log("Reprobado ❌");
}
```