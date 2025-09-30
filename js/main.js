//creamos las constantes globales para los elementos princiupales, son globales por que no estan dentro de una funcion
const form = document.getElementById('vehiculo-form');
const inputFoto = document.getElementById('foto-form');
const inputNombre = document.getElementById('nombre-form');
const inputMarca = document.getElementById('marca-form');
const inputModelo = document.getElementById('modelo-form');
const inputKm = document.getElementById('km-form');
const inputPrecio = document.getElementById('precio-form');
const contCards = document.getElementById('cards-row');

const btnCarrito = document.getElementById('button-carrito'); //capturo el boton deñ carrito
const contCarrito = document.getElementById("cont-carrito");//capturo el contenedor de las nuevas tarjetas

//creamos la funcion que nos permite crear una nueva tarea  a partir del FORMULARIO
//toda etiqueta que vamos a crear es a partir de la maqueta HTML pre existente
//esta funcion solo crea la estructura html y la deja en un "limbo" para luego ser agregada  mediante un appenchild
function createVehiculoCard(foto, nombre, marca, modelo, km, precio) {

    //aca creamos el elemento padre del contenedor
    const divCol = document.createElement('div');
    divCol.classList.add('col-md-6', 'item-vehiculo');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.classList.add('card-img-top', 'w-100');
    img.setAttribute('src', foto);
    img.setAttribute('alt', nombre);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const h3Nombre = document.createElement('h3');
    h3Nombre.classList.add('card-title');
    h3Nombre.textContent = nombre;

    const h4Marca = document.createElement('h4');
    h4Marca.classList.add('card-subtitle', 'text-muted');
    h4Marca.textContent = marca;

    const h4Modelo = document.createElement('h4');
    h4Modelo.classList.add('card-text');
    h4Modelo.innerText = 'Modelo: ' + modelo;

    const h4km = document.createElement('h4');
    h4km.classList.add('card-text1');
    h4km.textContent = 'Kilometraje: ' + km + ' km';

    const h2Precio = document.createElement('h2');
    h2Precio.classList.add('text-success');
    h2Precio.textContent = '$ ' + precio;

    const buttons = document.createElement('div');
    buttons.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const btnComprar = document.createElement('button');
    btnComprar.classList.add('btn', 'btn-success', 'btn-comprar');
    btnComprar.textContent = "Comprar";

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger', 'btn-eliminar');
    btnEliminar.textContent = "Eliminar";



    //-------------------------------------------------------------------------------------------------------------------------
    //agregamos mediante appenchild y Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    divCol.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(h3Nombre);
    cardBody.appendChild(h4Marca);
    cardBody.appendChild(h4Modelo);
    cardBody.appendChild(h4km);
    cardBody.appendChild(h2Precio);
    cardBody.appendChild(buttons);
    buttons.appendChild(btnComprar);
    buttons.appendChild(btnEliminar);


    //utilizamos el return para dar respuesta del elemento creado ya que lo usaremos en otra funcion mas adelante
    return divCol;
};

//detectamos el click o el evento click sobre el boton agregar con un evento de escuccha o listener
//para que a partir de este evento se agregue la tarea dentro del contenedor 
form.addEventListener('submit', (e) => {
    e.preventDefault();//evita que la pagina se recargue

    let foto = inputFoto.value.trim();//se guarda lo que el usuario ingresa y el trim evalua q no tenga espacios al inicio y final
    let nombre = inputNombre.value.trim();
    let marca = inputMarca.value.trim();
    let modelo = inputModelo.value.trim();
    let km = inputKm.value.trim();
    let precio = inputPrecio.value.trim();

    form.reset(); //resetea el formulario y lo deja vacio  para que el usuario ingrese nuevos datos

    if (foto === '') {
        foto = 'img/noFoto.png';

    }
    if (nombre === '' || marca === '' || modelo === '' || km === '' || precio === '') {
        alert("Ingrese todos los campos a registrar, todos son obligatorios");

    }

    const newCard = createVehiculoCard(foto, nombre, marca, modelo, km, precio);
    contCards.appendChild(newCard);
    eventsToDivCol(newCard);

    const newVehiculo = {
        foto: foto,
        nombre: nombre,
        marca: marca,
        modelo: modelo,
        km: km,
        precio: precio
    }

    const vehiculos = JSON.parse(localStorage.getItem('vehiculo')) || [];
    vehiculos.push(newVehiculo);

    localStorage.setItem('vehiculo', JSON.stringify(vehiculos))

});

// EVENTO TARJETAS-----------------------------------------------------------------------------------------------------
function eventsToDivCol(divCol) {
    // Captura específicamente el botón de comprar y eliminar usando una clase
    const btnComprar = divCol.querySelector('.btn-comprar');
    const btnEliminar = divCol.querySelector('.btn-eliminar');

    btnComprar.addEventListener('click', () => {
        const foto1 = divCol.querySelector('img').getAttribute('src');

        const nombre1 = divCol.querySelector('.card-title').textContent;
        const marca1 = divCol.querySelector('.card-subtitle').textContent;
        const precio1 = divCol.querySelector('.text-success').textContent;

        const createCard = createCardLateral(foto1, nombre1, marca1, precio1);

        document.getElementById('cont-carrito').appendChild(createCard);

        const newCarrito = {
            foto: foto1,
            nombre: nombre1,
            marca: marca1,
            precio: precio1
        }

        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(newCarrito);

        localStorage.setItem('carrito', JSON.stringify(carrito))
        actualizarTotal();

    });


    btnEliminar.addEventListener('click', () => {
        const nombreVehiculo = divCol.querySelector('.card-title').textContent;

        // 1. Elimina del DOM
        divCol.remove();

        // 2. Elimina también de localStorage
        let vehiculos = JSON.parse(localStorage.getItem('vehiculo')) || [];
        vehiculos = vehiculos.filter(v => v.nombre !== nombreVehiculo);
        localStorage.setItem('vehiculo', JSON.stringify(vehiculos));
    });



};


// --------------------------------------------------------------------------------------------------------------------------
// aca vamos ahacer que al darle click al boton del carrito aparezcan y desaparezcan los elementos agregados 
// aca agregamos el toogle para que al darle click los elementos aparezcan y desaparezcan al lado derecho
btnCarrito.addEventListener("click", () => {
    contCarrito.classList.toggle("cambiar");
});

//creamos la funcion que nos permite crear una nueva tarea  a partir del FORMULARIO que se hozo de las nuevas tarjetas
//toda etiqueta que vamos a crear es a partir de la maqueta HTML que se hizo 
//esta funcion solo crea la estructura html y la deja en un "limbo" para luego ser agregada  mediante un appenchild
function createCardLateral(foto1, nombre1, marca1, precio1) {
    const itemCarrito = document.createElement('div');
    itemCarrito.classList.add('col-md-12', 'carrito-compras');

    const cardCompras = document.createElement('div');
    cardCompras.classList.add('card-compras', 'd-flex', 'align-items-center', 'p-2'); 
    // <-- aquí la magia: flex + centrado

    const img = document.createElement('img');
    img.classList.add('img-fluid', 'rounded'); // más controlado que w-100
    img.style.maxWidth = "120px"; // imagen controlada
    img.setAttribute('src', foto1);
    img.setAttribute('alt', nombre1);

    const datosCompra = document.createElement('div');
    datosCompra.classList.add('ms-3', 'flex-grow-1'); 
    // margen a la izquierda + que ocupe espacio restante

    const h3Compras = document.createElement('h3');
    h3Compras.classList.add('card-title');
    h3Compras.textContent = nombre1;

    const h4Marcas = document.createElement('h4');
    h4Marcas.classList.add('card-subtitle', 'text-muted');
    h4Marcas.textContent = marca1;

    const h2Precios = document.createElement('h2');
    h2Precios.classList.add('text-success');
    h2Precios.textContent = precio1;

    const btnEliminarCompra = document.createElement('button');
    btnEliminarCompra.classList.add('eliminar-compra', 'btn', 'btn-danger', 'btn-sm', 'mt-2');
    btnEliminarCompra.textContent = "X";

    // Estructura
    itemCarrito.appendChild(cardCompras);
    cardCompras.appendChild(img);
    cardCompras.appendChild(datosCompra);
    datosCompra.appendChild(h3Compras);
    datosCompra.appendChild(h4Marcas);
    datosCompra.appendChild(h2Precios);
    datosCompra.appendChild(btnEliminarCompra);

    btnEliminarCompra.addEventListener('click', () => {
        itemCarrito.remove();
        actualizarTotal();
    });

    return itemCarrito;
};





// función para actualizar el total del carrito
function actualizarTotal() {
    let total = 0;

    // busca los precios en el carrito
    const precios = document.querySelectorAll("#cont-carrito .text-success");

    precios.forEach(precio => {
        let valor = precio.textContent.replace(/[^0-9]/g, "");
        total += parseInt(valor) || 0;
    });

    document.getElementById("monto-total").textContent = '$' + total;
}

