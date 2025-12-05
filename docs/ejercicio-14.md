# Ejercicio 14 - Juego: Mayor o menor (número aleatorio)

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](../ejercicio-14-solucion.md)

---

# 1️⃣4️⃣ “Juego: Mayor o menor (número aleatorio)”

**Objetivo:** Math.random(), condicionales, comparación.

**Enunciado:**
El programa genera un número aleatorio entre 1 y 10 (llamémoslo base) y lo muestra.
Luego genera OTRO número aleatorio entre 1 y 10 (llamémoslo nuevo, pero no lo muestra al usuario).

El usuario debe adivinar si el nuevo número será “mayor” o “menor” que el base.
Después de que escriba su predicción, se revela el número nuevo y se dice si acertó o no.

**Pistas:**
- const base = Math.floor(Math.random() * 10) + 1;
- const nuevo = Math.floor(Math.random() * 10) + 1;
- Comparar:
- Si predicción = “mayor” y nuevo > base → acierta
- Si predicción = “menor” y nuevo < base → acierta
- Si son iguales, puedes decidir que nadie gana o que es empate.