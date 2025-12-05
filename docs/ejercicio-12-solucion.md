# Solución – Ejercicio 12: Promedio con mensaje

Pedir 3 notas, validar rango y mostrar mensaje según el promedio.

```js
const n1 = Number(prompt("Ingresa nota 1 (1 a 7):"));
const n2 = Number(prompt("Ingresa nota 2 (1 a 7):"));
const n3 = Number(prompt("Ingresa nota 3 (1 a 7):"));

const algunaNoEsNumero = isNaN(n1) || isNaN(n2) || isNaN(n3);
const algunaFueraDeRango =
  n1 < 1 || n1 > 7 || n2 < 1 || n2 > 7 || n3 < 1 || n3 > 7;

if (algunaNoEsNumero) {
  console.log("Todas las notas deben ser números válidos.");
} else if (algunaFueraDeRango) {
  console.log("Todas las notas deben estar entre 1 y 7.");
} else {
  let promedio = (n1 + n2 + n3) / 3;
  promedio = Math.round(promedio * 10) / 10; // redondear a 1 decimal

  console.log("Promedio:", promedio);

  if (promedio >= 6) {
    console.log("Excelente 🏆");
  } else if (promedio >= 5) {
    console.log("Buen rendimiento 🙂");
  } else if (promedio >= 4) {
    console.log("Aprobado, pero puedes mejorar 😅");
  } else {
    console.log("Reprobado, sigue intentándolo 💪");
  }
}
```