# Consigna:

<p>Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el middleware express. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/productos' y el otro con '/carrito'. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com
</p>
<p>El router base '/productos' implementará cinco funcionalidades:</p>
<ul>
    <li>Buscar todos y Buscar por id: Me permite listar todos los productos disponibles ó un producto por su id (disponibles para usuarios y administradores)</li>
    <li>Agregar : Para incorporar productos al listado (disponible para administradores)</li>
    <li>Actualizar por id: Actualiza un producto por su id (disponible para administradores)</li>
    <li>Borrar por id: Borra un producto por su id (disponible para administradores)</li>
</ul>
<p>El router base '/carrito' implementará cuatro funcionalidades:</p>
<ul>
    <li>Buscar todos y Buscar por id: Me permite listar todos los productos guardados en el carrito ó un producto por su id de carrito (disponible para usuarios y administradores)</li>
    <li>Agregar por id: Para incorporar productos al carrito por su id de producto (disponible para usuarios y administradores)</li>
    <li>Eliminar por id: Eliminar un producto del carrito por su id de carrito (disponible para usuarios y administradores)</li>
</ul>
<p>Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada}</p>
<p>Un producto dispondrá de los siguientes campos:  id, timestamp, nombre, descripcion, código, foto (url), precio, stock.</p>
<p>El carrito de compras tendrá la siguiente estructura: id, timestamp(carrito), producto: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }</p>
<p>El timestamp puede implementarse con Date.now()</p>
<p>Comenzar a trabajar con el listado de productos y el carrito de compras en memoria del servidor, luego persistirlos en el filesystem.</p>


# Scripts
### npm run build => transpila el proyecto de Typescript a Javascript
### npm run start => inicia el proyecto

