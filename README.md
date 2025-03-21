# AgroMX - Ecommerce Agroecológico

AgroMX es una plataforma de comercio electrónico enfocada en la venta de productos agroecológicos. Su principal objetivo es conectar a productores locales de toda la República Mexicana con consumidores interesados en productos frescos, saludables y sostenibles. A través de esta plataforma, se impulsa el comercio justo, promoviendo la economía local y el consumo responsable.

El ecommerce de AgroMX ofrece un amplio catálogo de productos provenientes de distintos productores agroecológicos del país, asegurando que los clientes puedan acceder a alimentos de alta calidad, libres de químicos dañinos y cultivados de manera sustentable. Además, la plataforma incluye herramientas interactivas como filtros avanzados de búsqueda, descripciones detalladas de los productos, información sobre el origen de los alimentos y una comunidad donde los usuarios pueden compartir recetas y consejos agroecológicos.

Esta plataforma no solo facilita la compra y venta de productos agroecológicos, sino que también busca educar y concientizar a los consumidores sobre la importancia de adoptar un estilo de vida más saludable y sostenible. En AgroMX, creemos en un modelo de comercio electrónico que beneficia tanto a los pequeños productores como a los consumidores finales, garantizando transparencia, trazabilidad y confianza en cada transacción.

## Tecnologías utilizadas

El frontend de AgroMX ha sido desarrollado con las siguientes tecnologías:

- **HTML5**: Para la estructura del contenido.
- **CSS3**: Para el diseño y la presentación visual.
- **JavaScript (ES6+)**: Para la interactividad y la manipulación del DOM.
- **Bootstrap**: Para un diseño responsivo y una interfaz atractiva.
- **React.js**: Para el desarrollo de una aplicación web moderna, modular y eficiente.

## Instalación y configuración

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Git (para clonar el repositorio)

### Pasos de instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/agromx-frontend.git
   ```
2. Ingresar al directorio del proyecto:
   ```sh
   cd agromx-frontend
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Iniciar el entorno de desarrollo:
   ```sh
   npm start
   ```

Esto ejecutará la aplicación en `http://localhost:3000/`.

## Estructura del proyecto

```
/agromx-frontend
│── /public        # Archivos estáticos y assets
│   │── /data      # Archivos JSON con datos de productos
│   │── /images    # Imágenes del sitio
│   │── /json      # Otros datos en formato JSON
│── /src
│   │── /components  # Componentes reutilizables
│   │── /context     # Contexto de la aplicación
│   │── /pages       # Páginas principales del sitio
│   │   │── /Carrito         # Página del carrito de compras
│   │   │── /Catalogo        # Catálogo de productos
│   │   │── /Comunidad       # Sección comunitaria
│   │   │── /DetallesProducto # Detalles de un producto
│   │   │── /DeveloperTeam   # Información del equipo
│   │   │── /login           # Página de inicio de sesión
│   │   │── /Productos       # Listado de productos
│   │   │── /Registro        # Página de registro de usuarios
│   │   │── /SobreNosotros   # Información sobre la empresa
│   │── carrito.jsx  # Componente del carrito de compras
│   │── Inicio.jsx   # Página de inicio
│   │── App.css      # Estilos generales de la aplicación
│   │── App.jsx      # Componente principal de React
│   │── index.css    # Estilos base
│   │── main.jsx     # Punto de entrada de la aplicación
│── .gitignore       # Archivos y carpetas ignorados por Git
│── .prettierrc.json # Configuración de Prettier
│── eslint.config.js # Configuración de ESLint
│── index.html       # Archivo base HTML
│── LICENSE          # Licencia del proyecto
│── package-lock.json# Archivo de bloqueo de dependencias
│── package.json     # Dependencias y configuración de npm
│── README.md        # Documentación del proyecto
│── vercel.json      # Configuración para despliegue en Vercel
│── vite.config.js   # Configuración de Vite para React
```

## Funcionalidades principales

- **Exploración de productos** 
- **Detalle de productos** con descripciones.
- **Registro e inicio de sesión** con validación de datos.
- **Carrito de compras** con edición de cantidades y opciones de pago.
- **Sección comunitaria** con recetas, consejos agroecológicos y noticias.
- **Interfaz responsiva y accesible** optimizada para dispositivos móviles.

## Deployment

Para desplegar la aplicación en un entorno de producción, se recomienda utilizar plataformas como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (solo para proyectos estáticos)

Pasos para despliegue en Vercel:

1. Instalar Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Autenticarse en Vercel:
   ```sh
   vercel login
   ```
3. Desplegar el proyecto:
   ```sh
   vercel
   ```

## Contribución

Si deseas contribuir al proyecto:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios y confirma los commits (`git commit -m "Descripción del cambio"`).
4. Sube los cambios a tu fork (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request en el repositorio principal.

## Contacto

Si tienes dudas o sugerencias, puedes contactarnos a:

- **jaelbkz@icloud.com**
- **katherinehinojosamolina@gmail.com**
- **diazdae@gmail.com**
- **liset10nieve@live.com.mx**
- **elizabethania.te@gmail.com**
- **davidavellaneda863@gmail.com**
- **ecjeux24@gmail.com**
- **hilarihernandezislas@gmail.com**


