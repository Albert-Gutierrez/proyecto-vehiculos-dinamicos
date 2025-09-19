//creamos las constantes globales para los elementos princiupales, son globales por que no estan dentro de una funcion
const form = document.getElementById('vehiculo-form');
const inputFoto = document.getElementById('foto-form');
const inputNombre = document.getElementById('nombre-form');
const inputMarca = document.getElementById('marca-form');
const inputModelo = document.getElementById('modelo-form');
const inputKm = document.getElementById('km-form');
const inputPrecio = document.getElementById('precio-form');
const contCards = document.getElementById('cards-row');

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
    h4Modelo.innerText = 'Modelo:' + modelo;

    const h4km = document.createElement('h4');
    h4km.classList.add('card-text');
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

    let foto = inputFoto.value.trim();//se guarda lo que el usuario ingresa
    let nombre = inputNombre.value.trim();
    let marca = inputMarca.value.trim();
    let modelo = inputModelo.value.trim();
    let km = inputKm.value.trim();
    let precio = inputPrecio.value.trim();

    form.reset(); //resetea el formulario para diligenciar los datos


    if (foto === '') {
        foto = 'img/noFoto.png';

    }
    if (nombre === '' || marca === '' || modelo === '' || km === '' || precio === '') {
        alert("Ingrese todos los campos a registrar, todos son obligatorios");

    }
    else {
        const newCard = createVehiculoCard(foto, nombre, marca, modelo, km, precio);
        contCards.appendChild(newCard);
        eventsToDivCol(newCard);
    }
});



function eventsToDivCol(divCol) {
    // Captura específicamente el botón de comprar y eliminar usando una clase
    const btnComprar = divCol.querySelector(".btn-comprar");
    const btnEliminar = divCol.querySelector(".btn-eliminar");

    btnComprar.addEventListener('click', () => {
        alert('DISFRUTA TU COMPRA')
    });

    btnEliminar.addEventListener('click', () => {
        divCol.remove(); // elimina la tarjeta del DOM
    });
};
