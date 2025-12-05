# Solución – Ejercicio 8: Descuento en tienda

Reglas:
- Si es miembro **y** compra ≥ 50.000 → 10% de descuento.
- Si compra ≥ 100.000 (aunque no sea miembro) → 10% de descuento.

```js
const entradaMonto = prompt("Ingresa el monto de la compra:");
const monto = Number(entradaMonto);

let miembroEntrada = prompt("¿Eres miembro? (si/no):");

if (miembroEntrada) {
  miembroEntrada = miembroEntrada.toLowerCase();
}

const esMiembro = miembroEntrada === "si";

if (isNaN(monto) || monto <= 0) {
  console.log("Debes ingresar un monto válido mayor que 0.");
} else {
  const aplicaPorMiembro = esMiembro && monto >= 50000;
  const aplicaPorMonto = monto >= 100000;

  if (aplicaPorMiembro || aplicaPorMonto) {
    const descuento = monto * 0.1;
    const total = monto - descuento;
    console.log("Monto original: $" + monto);
    console.log("Descuento aplicado: $" + descuento);
    console.log("Total a pagar: $" + total);
  } else {
    console.log("No aplica descuento. Total a pagar: $" + monto);
  }
}
```