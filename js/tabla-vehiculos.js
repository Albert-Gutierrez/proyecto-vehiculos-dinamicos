const tablaBody = document.querySelector('#tabla-vehiculos tbody');

document.addEventListener('DOMContentLoaded', () => {

    const vehiculosGuardados = JSON.parse(localStorage.getItem("carrito")) || [];

    vehiculosGuardados.forEach((carrito) => {

        const fila = document.createElement("tr");

        const tdFoto = document.createElement("td");
        const img = document.createElement("img");
        img.src = carrito.foto;
        img.alt = carrito.nombre;
        tdFoto.appendChild(img);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = carrito.nombre;

        const tdMarca = document.createElement("td");
        tdMarca.textContent = carrito.marca;

        const tdModelo = document.createElement("td");
        tdModelo.textContent = carrito.modelo;

        const tdKilometraje = document.createElement("td");
        tdKilometraje.textContent = carrito.km;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = carrito.precio;

        fila.appendChild(tdFoto);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKilometraje);
        fila.appendChild(tdPrecio);
        tablaBody.appendChild(fila);
    });

});