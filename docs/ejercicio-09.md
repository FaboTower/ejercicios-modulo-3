# Ejercicio 9 - Descuento en tienda

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](../ejercicio-09-solucion.md)

---

# 9️⃣ “Juego: Cara o Cruz (una sola ronda)”

**Objetivo:** Math.random(), condicional, strings.

**Enunciado:**
Pide al usuario que elija “cara” o “cruz”.
El programa “lanza una moneda” generando un número aleatorio:
- 0 → “cara”
- 1 → “cruz”

Muestra el resultado de la moneda y si el usuario ganó o perdió.

**Pistas:**
```js
const eleccion = prompt("cara o cruz");
const numero = Math.floor(Math.random() * 2); // 0 o 1
let resultado;
if (numero === 0) {
  resultado = "cara";
} else {
  resultado = "cruz";
}
if (eleccion === resultado) { ... }
```