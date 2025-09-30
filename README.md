🚗 Proyecto Vehículos Dinámicos

Este es un proyecto web en JavaScript que permite gestionar vehículos de forma dinámica, mostrando la información en tarjetas y en una tabla al mismo tiempo.
Toda la información se guarda en LocalStorage, de modo que al recargar la página los datos se conservan.

📌 Características

Registro de vehículos mediante un formulario.

Cada vehículo incluye:

Foto (URL de la imagen)

Nombre

Marca

Modelo

Kilometraje

Precio

Visualización de la información en:

Tarjetas dinámicas con botón de eliminación.

Tabla detallada con todos los campos.

Persistencia de datos usando LocalStorage.

Eliminación de vehículos que actualiza tanto tarjetas como tabla.

🛠️ Tecnologías utilizadas

HTML5

CSS3 (Bootstrap 5 para estilos rápidos y responsivos)

JavaScript (ES6+)

LocalStorage para la persistencia de datos.

📂 Estructura del proyecto
📦 vehiculos-dinamicos
 ┣ 📜 index.html
 ┣ 📜 main.js
 ┣ 📜 style.css
 ┣ 📂 img/ (opcional para guardar imágenes locales)
 ┗ 📜 README.md

▶️ Uso

Clona este repositorio:

git clone https://github.com/tu-usuario/vehiculos-dinamicos.git


Abre el archivo index.html en tu navegador.

Llena el formulario con los datos del vehículo:

URL de la foto

Nombre

Marca

Modelo

Kilometraje

Precio

Presiona Guardar:

El vehículo aparecerá en la tabla y en una tarjeta lateral.

Si deseas eliminar un vehículo:

Haz clic en el botón X de la tarjeta correspondiente.

Automáticamente se actualizarán las tarjetas y la tabla.

📷 Vista previa
Formulario + tarjetas

Tabla de vehículos

🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir lo que te gustaría modificar.

📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para aprender, modificar y compartir.
