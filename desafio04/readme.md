## Consigna 1:

<ul>
<li>Realizar un documento web que contenga un elemento input y que a medida de que escribo, se vaya mostrando a su derecha el texto en forma espejada. Utilizar un Observable para realizar esa función.</li>
<li>Este comportamiento estará disponible por 30 segundos. Luego de ese tiempo, se realizará la desuscripción automática. </li>
<li>Si en el lapso de tiempo activo se escribe ‘error’, el Observable terminará por error. Si se ingresa ‘complete’, el Observable terminará en forma normal. Indicar por la consola la razón del cierre de la función.</li>
<li>Una vez que el Observable no esté más operativo, desregistrar el evento de entrada, deshabilitar la escritura en el input y borrar el resultado de la operación.</li>
</ul>

## Consigna 2:

<ul>
<li>En lugar de manejar la conversión de datos dentro del Observable, hacerlo utilizando el método pipe y operadores rxjs (a elección)</li>
</ul>