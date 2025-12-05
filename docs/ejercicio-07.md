# Ejercicio 7 - Acceso al sistema

[⬅ Volver al índice](../index.html)  
[➡ Ver solución](./ejercicio-07-solucion.md)

---

# 7️⃣ “Acceso al sistema”

**Objetivo:** comparación de strings + ===.

**Enunciado:**
El sistema tiene guardado un usuario y contraseña:

```js
const USUARIO = "admin";
const PASSWORD = "1234";
```

Pide al usuario que ingrese usuario y contraseña.
Si ambos coinciden exactamente, mostrar: “Acceso concedido”.
Si no, mostrar: “Usuario o contraseña incorrectos”.

**Pistas:**
- Comparar con ===.
- Usar if (userIngresado === USUARIO && passIngresado === PASSWORD) { ... }.