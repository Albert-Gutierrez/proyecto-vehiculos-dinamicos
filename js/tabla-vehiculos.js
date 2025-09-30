const tablaBody = document.querySelector('#tabla-vehiculos tbody');

// Función que vuelve a renderizar la tabla desde localStorage
function renderTabla() {
    tablaBody.innerHTML = ""; // limpia antes de volver a llenar

    const vehiculosGuardados = JSON.parse(localStorage.getItem("vehiculo")) || [];

    vehiculosGuardados.forEach((vehiculo) => {
        const fila = document.createElement("tr");

        const tdFoto = document.createElement("td");
        const img = document.createElement("img");
        img.src = vehiculo.foto;
        img.alt = vehiculo.nombre;
        tdFoto.appendChild(img);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = vehiculo.nombre;

        const tdMarca = document.createElement("td");
        tdMarca.textContent = vehiculo.marca;

        const tdModelo = document.createElement("td");
        tdModelo.textContent = vehiculo.modelo;

        const tdKilometraje = document.createElement("td");
        tdKilometraje.textContent = vehiculo.km;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = vehiculo.precio;

        fila.appendChild(tdFoto);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKilometraje);
        fila.appendChild(tdPrecio);

        tablaBody.appendChild(fila);
    });
}

// Render inicial cuando cargue la página
document.addEventListener('DOMContentLoaded', renderTabla);

// Escucha cambios de localStorage desde otras páginas (como la principal)
window.addEventListener('storage', (e) => {
    if (e.key === "vehiculo") {
        renderTabla();
    }
});
