# Solución – Ejercicio 13: Piedra, papel o tijera (2 jugadores)

Reglas:
- piedra gana a tijera
- tijera gana a papel
- papel gana a piedra
- misma jugada → empate

```js
let j1 = prompt('Jugador 1: piedra, papel o tijera');
let j2 = prompt('Jugador 2: piedra, papel o tijera');

if (!j1 || !j2) {
  console.log("Ambos jugadores deben ingresar una opción.");
} else {
  j1 = j1.toLowerCase();
  j2 = j2.toLowerCase();

  const opcionesValidas = ["piedra", "papel", "tijera"];

  const j1Valido = opcionesValidas.includes(j1);
  const j2Valido = opcionesValidas.includes(j2);

  if (!j1Valido || !j2Valido) {
    console.log('Las opciones válidas son: "piedra", "papel" o "tijera".');
  } else if (j1 === j2) {
    console.log("Empate 🤝");
  } else if (
    (j1 === "piedra" && j2 === "tijera") ||
    (j1 === "tijera" && j2 === "papel") ||
    (j1 === "papel" && j2 === "piedra")
  ) {
    console.log("Gana Jugador 1 🏆");
  } else {
    console.log("Gana Jugador 2 🏆");
  }
}
```