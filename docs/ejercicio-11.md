# Ejercicio 11 - Simulador de semáforo peatonal

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-11-solucion.md)

---

# 1️⃣1️⃣ “Simulador de semáforo peatonal”

**Objetivo:** condicionales + &&/||.

**Enunciado:**
Pide dos datos:
	1.	Color del semáforo ("rojo", "amarillo", "verde").
	2.	Si viene un auto ("si" / "no").

**Reglas:**
- Si el semáforo está en verde y no viene auto → “Cruza ahora”.
- Si está en rojo → “No cruces”.
- Si está en amarillo o viene un auto → “Espera”.

**Pistas:**
- Convertir a minúsculas con .toLowerCase().
- Condición principal:
if (color === "verde" && vieneAuto === "no") { ... }
else if (color === "rojo") { ... }
else { ... }.