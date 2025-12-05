# Solución – Ejercicio 11: Semáforo peatonal

Reglas:
- Verde y NO viene auto → "Cruza ahora".
- Rojo → "No cruces".
- Amarillo o viene auto → "Espera".

```js
let color = prompt('Ingresa el color del semáforo (rojo/amarillo/verde):');
let vieneAuto = prompt('¿Viene un auto? (si/no):');

if (!color || !vieneAuto) {
  console.log("Debes ingresar ambos datos.");
} else {
  color = color.toLowerCase();
  vieneAuto = vieneAuto.toLowerCase();

  const hayAuto = vieneAuto === "si";

  if (color === "verde" && !hayAuto) {
    console.log("Cruza ahora ✅");
  } else if (color === "rojo") {
    console.log("No cruces ❌");
  } else {
    console.log("Espera ⚠️");
  }
}
```