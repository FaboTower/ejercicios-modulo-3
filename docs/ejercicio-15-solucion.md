# Solución – Ejercicio 15: Mini cajero automático

Acciones:
- "consultar" → ver saldo
- "depositar" → sumar monto al saldo
- "retirar" → restar monto si hay saldo suficiente

```js
let saldo = 100000;

const accion = prompt(
  '¿Qué deseas hacer? Escribe "consultar", "depositar" o "retirar":'
);

if (!accion) {
  console.log("Operación cancelada.");
} else {
  const opcion = accion.toLowerCase();

  if (opcion === "consultar") {
    console.log("Tu saldo actual es: $" + saldo);
  } else if (opcion === "depositar") {
    const entradaMonto = prompt("Monto a depositar:");
    const monto = Number(entradaMonto);

    if (isNaN(monto) || monto <= 0) {
      console.log("Debes ingresar un monto válido mayor que 0.");
    } else {
      saldo += monto;
      console.log("Depósito realizado. Nuevo saldo: $" + saldo);
    }
  } else if (opcion === "retirar") {
    const entradaMonto = prompt("Monto a retirar:");
    const monto = Number(entradaMonto);

    if (isNaN(monto) || monto <= 0) {
      console.log("Debes ingresar un monto válido mayor que 0.");
    } else if (monto > saldo) {
      console.log("Fondos insuficientes. Tu saldo es: $" + saldo);
    } else {
      saldo -= monto;
      console.log("Retiro realizado. Nuevo saldo: $" + saldo);
    }
  } else {
    console.log('Acción no válida. Usa "consultar", "depositar" o "retirar".');
  }
}
```