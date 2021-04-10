## Consigna:
<p>Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:</p>
    <ul>
    <li>Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }</li>
    <li>Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.txt'. <br>El formato de respuesta será: { item: {producto} }
    </li>
    <li>La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. <br>Contestar con el formato:  { visitas : { items: cantidad, item: cantidad } }</li>
    </ul>