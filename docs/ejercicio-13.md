# Ejercicio 13 - Juego: Piedra, Papel o Tijeras (repaso)

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-13-solucion.md)

---

# 1️⃣3️⃣ “Juego: Piedra, Papel o Tijeras (repaso)”

**Objetivo:** condicionales múltiples, comparación de strings, && y ||.

Enunciado (versión simple sin estadísticas):
Pide al jugador 1 que escriba “piedra”, “papel” o “tijera”.
Pide al jugador 2 que haga lo mismo.
**Muestra:**
- Elección de cada uno.
- Quién gana según las reglas:
- piedra gana a tijera
- tijera gana a papel
- papel gana a piedra
- mismo valor → empate

**Pistas:**
```js
if (j1 === j2) { empate }
else if (
  (j1 === "piedra" && j2 === "tijera") ||
  (j1 === "tijera" && j2 === "papel") ||
  (j1 === "papel" && j2 === "piedra")
) { gana jugador 1 }
else { gana jugador 2 }
```