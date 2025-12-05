# Ejercicio 15 - Mini simulador de cajero automático

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](../ejercicio-15-solucion.md)

---

# 1️⃣5️⃣ “Mini simulador de cajero automático”

**Objetivo:** condicionales anidados, && y ||, números.

**Enunciado:**
Simula un cajero muy simple:
	1.	Define un saldo inicial, por ejemplo:
let saldo = 100000;
	2.	Pide al usuario una acción: "consultar", "depositar", "retirar".
	3.	Si es "consultar" → muestra el saldo.
	4.	Si es "depositar" → pide monto, lo suma al saldo y muestra el nuevo saldo.
	5.	Si es "retirar" → pide monto:
	 - Si el monto es mayor que el saldo → “Fondos insuficientes”.
	 - Si el monto es menor o igual al saldo → resta y muestra nuevo saldo.
	6.	Si la acción no es válida → mostrar mensaje de error.

**Pistas:**
- Usar varios if / else if / else.
- Validar que el monto sea mayor a 0.
- Puedes usar if (accion === "consultar") { ... } else if (accion === "depositar") { ... } ....