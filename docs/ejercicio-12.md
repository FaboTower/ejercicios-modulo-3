# Ejercicio 12 - Cálculo de promedio con mensaje (versión mejorada)

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-12-solucion.md)

---

# 1️⃣2️⃣ “Cálculo de promedio con mensaje (versión mejorada)”

**Objetivo:** repasar lo que ya hiciste pero con mejor estructura.

**Enunciado:**
Pide 3 notas, calcula el promedio y:
- Si promedio ≥ 6.0 → “Excelente”
- Si 5.0 ≤ promedio < 6.0 → “Buen rendimiento”
- Si 4.0 ≤ promedio < 5.0 → “Aprobado, pero puedes mejorar”
- Si promedio < 4 → “Reprobado”

**Además:**
- Validar que las notas estén entre 1 y 7.
- Si alguna está fuera de rango → mostrar un mensaje de error y no calcular el promedio.

**Pistas:**
- Validar con if (nota1 < 1 || nota1 > 7 || nota2 < 1 || ... ) { error }.
- || se usa porque si cualquiera está mal, se cancela.