# 🎉 Amigo Secreto

Este proyecto es una aplicación web sencilla que permite organizar un sorteo de "Amigo Secreto". Los usuarios pueden agregar nombres de amigos, ver la lista de participantes y realizar el sorteo de manera aleatoria.

## 📋 Características

- **Agregar amigos**: Permite al usuario añadir nombres a una lista de participantes.
- **Visualizar lista**: Los nombres se muestran dinámicamente en la lista de participantes.
- **Sortear un amigo**: Selecciona de manera aleatoria uno de los nombres de la lista.
- **Validaciones**:
  - Evita agregar nombres vacíos.
  - Muestra un mensaje si la lista está vacía al intentar realizar el sorteo.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Para estructurar la aplicación.
- **CSS3**: Para el diseño y estilos visuales.
- **JavaScript**: Para la lógica y la interactividad.

## 📂 Estructura del proyecto
AmigoSecreto/ │ ├── index.html # Archivo principal con la estructura HTML ├── style.css # Estilos CSS para el diseño ├── app.js # Lógica en JavaScript ├── assets/ # Carpeta para imágenes e íconos │ └── amigo-secreto.png │ └── play_circle_outline.png └── README.md # Archivo de documentación del proyecto


## 🚀 Cómo usar el proyecto

1. Clona este repositorio o descarga los archivos:
   ```bash
   git clone https://github.com/Rzeta248/amigo-secreto-challenge.git
2. Abre el archivo index.html en tu navegador preferido.
3. Comienza a interactuar:
  Escribe un nombre en el campo de texto y presiona "Añadir".
  Visualiza los amigos agregados en la lista.
  Haz clic en "Sortear amigo" para seleccionar uno al azar.

🎯 Funcionalidades principales

Agregar amigos
Los nombres de los amigos se capturan desde un campo de texto y se almacenan en un arreglo. La lista se actualiza dinámicamente para mostrar todos los participantes.

Sortear un amigo
Mediante una combinación de Math.random() y Math.floor(), se selecciona un nombre al azar del arreglo y se muestra en la interfaz.

Validaciones
  No permite agregar nombres vacíos.
  Evita realizar el sorteo si no hay amigos en la lista.

🖼️ Capturas de pantalla
Página inicial


Ejemplo de sorteo


📦 Instalación
No se requiere instalación. Solo abre el archivo index.html en tu navegador y todo estará listo para usar.

📝 Notas
Puedes personalizar el diseño modificando style.css.
Si deseas agregar nuevas funcionalidades, como eliminar amigos de la lista o reiniciar el sorteo, puedes hacerlo en app.js.
📜 Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

