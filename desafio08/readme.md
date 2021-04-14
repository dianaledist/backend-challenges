## Consigna:
<p>Realizar un proyecto de servidor basado en node.js que permita listar e incorporar ítems dentro de un array de productos en memoria.</p>
<ul>
<li>Implementar las rutas get y post en conjunto con las funciones necesarias (utilizar clases y un módulo propio).</li>
<li>Cada ítem almacenado dispondrá de un id proporcionado por el backend, que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.</li>
    <ol>
    <li>Listar en forma total (get) : '/api/productos' -> devuelve array de productos</li>
    <li>Listar en forma individual (get) (por id): '/api/productos/:id' -> devuelve producto listado</li>
    <li>Almacenar un producto (post) : '/api/productos' -> devuelve producto incorporado</li>
    </ol>
<li>Para el caso de que se liste en forma individual un producto que no exista, se devolverá el objeto: {error : 'producto no encontrado'}</li>
<li>En caso de no haber productos en el listado total, se retornará el objeto: {error : 'no hay productos cargados'}</li>
<li>Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman</li>
</ul>