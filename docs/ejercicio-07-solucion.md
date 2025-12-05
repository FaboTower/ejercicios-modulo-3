# Solución – Ejercicio 7: Acceso al sistema

Comparar usuario y contraseña con valores predefinidos.

```js
const USUARIO = "admin";
const PASSWORD = "1234";

const userIngresado = prompt("Usuario:");
const passIngresada = prompt("Contraseña:");

if (userIngresado === null || passIngresada === null) {
  console.log("Operación cancelada.");
} else if (userIngresado === USUARIO && passIngresada === PASSWORD) {
  console.log("Acceso concedido ✅");
} else {
  console.log("Usuario o contraseña incorrectos ❌");
}
```