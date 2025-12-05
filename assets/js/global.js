const links = document.querySelectorAll("a[data-md]");
const viewer = document.getElementById("viewer");
const msg = document.getElementById("mensaje-carga");

async function cargarMarkdown(ruta, linkActual) {
try {
    msg.textContent = "Cargando archivo Markdown...";
    viewer.innerHTML = "";

    // Marcar link activo
    links.forEach((l) => l.classList.remove("activo"));
    if (linkActual) linkActual.classList.add("activo");

    const respuesta = await fetch(ruta);
    if (!respuesta.ok) {
    throw new Error("No se pudo cargar el archivo.");
    }

    const textoMd = await respuesta.text();
    // Usamos la librería "marked" para convertir a HTML
    const html = marked.parse(textoMd);
    viewer.innerHTML = html;
    msg.textContent = `Mostrando: ${ruta}`;
} catch (error) {
    msg.textContent = "Error al cargar el archivo.";
    viewer.innerHTML =
    "<p>Revisa la ruta del archivo o el servidor local.</p>";
    console.error(error);
}
}

// Asignar eventos a los enlaces
links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const ruta = link.getAttribute("data-md");
        cargarMarkdown(ruta, link);
    });
});