# Consigna:

### Deberás entregar el estado de avance de tu aplicación eCommerce Backend, agregando 7 tipos de persistencia de datos:

<ul>
    <li>1) File System (fs)</li>
    <li>2) MySQL/MariaDB local</li>
    <li>3) MySQL/MariaDB DBaaS</li>
    <li>4) SQLite3</li>
    <li>5) MongoDB Local</li>
    <li>6) MongoDB DBaaS</li>
    <li>7) Firebase</li>
</ul>

<ol>
    <li>Implementarás en cada tipo el CRUD correspondiente a los procesos anteriormente desarrollados, con persistencia en memoria.</li>
    <li>La funcionalidad de persistencia para todos estos casos debe ser realizada utilizando clases con interfaz única (los nombres de los métodos comunes deben ser iguales). Cada clase representará un tipo de persistencia.</li>
    <li>Incluir dentro de estos tipos la ya realizada en memoria (Tipo 0).</li>
    <li>Para seleccionar el modo de persistencia operativa, crear una clase o función que actúe como 'Fábrica ó Factory': recibirá el 'número' de persistencia (1 al 7 y 0 para memoria) y devolverá el objeto correspondiente para el uso por parte del controlador o lógica de negocio en cada caso de uso (carrito o lista de productos).</li>
    <li>Estas clases, llamadas DAO (Data Access Object), implementarán los métodos de conexión hacia cada base, así como los 4 métodos CRUD: Create (insert), Read (leer con o sin filtro), Update (actualizar), Delete (borrar) y los métodos auxiliares que se consideren incorporar.</li>
    <li>La selección de la capa de persistencia activa se hará a través de una variable global, a la cual se le asignará una constante. El nombre de dicha constante corresponderá al tipo de persistencia y se inicializará con el número correspondiente.</li>
    <li>En la vista de productos incorporar filtros mediante los cuales el cliente pueda determinar qué información desea ver.</li>
</ol>



# Scripts
### npm run start => Funciona el script con babel y nodemon


