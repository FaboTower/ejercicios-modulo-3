# Ejercicio 10 - Comparador de 3 números

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-10-solucion.md)

---

# 🔟 “Comparador de 3 números”

**Objetivo:** operadores relacionales, &&.

**Enunciado:**
Pide 3 números al usuario: a, b, c.

**Muestra:**
- Cuál es el mayor.
- Si hay empate, indícalo (por ejemplo: “Hay al menos dos números iguales”).

**Pistas:**
- Puedes hacer comparaciones del tipo:
if (a > b && a > c) {...}
else if (b > a && b > c) {...}
else if (c > a && c > b) {...}
else { "Hay al menos un empate" }.