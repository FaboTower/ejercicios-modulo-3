# Ejercicio 8 - Descuento en tienda

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-08-solucion.md)

---

# 8️⃣ “Descuento en tienda”

**Objetivo:** condicionales + && y ||.

**Enunciado:**
En una tienda, si un cliente:
- Es miembro (esMiembro === true) y
- El monto de la compra es mayor o igual a 50.000

obtiene un 10% de descuento.
Si solo el monto es mayor a 100.000, también obtiene el descuento aunque no sea miembro.

**Pide:**
- Monto de compra.
- Si es miembro (puedes pedir “si/no” y convertir a booleano).

**Muestra:**
- Monto original.
- Si aplica o no descuento.
- Monto final.

**Pistas:**
- Condición de miembro: esMiembro === true && monto >= 50000
- O sin ser miembro: monto >= 100000
- Combinar: if ((esMiembro && monto >= 50000) || monto >= 100000) { … }