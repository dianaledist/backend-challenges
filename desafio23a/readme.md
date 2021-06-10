# Chat Vintage 🎮
## Un chat para personas nostálgicas 💖

#### Para probar el proyecto en local: descargá la carpeta a tu pc, agregá las dependencias de activación y listo! Con npm start empieza a funcionar el sitio. 
<br>

# Tools ⚒
#### NES.css: Framework CSS para diseñar sitios vintage 🎮 
* <a href="https://nostalgic-css.github.io/NES.css/">NES.css </a>
#### Socket-io: Biblioteca de JavaScript para aplicaciones web en tiempo real
* <a href="https://socket.io/">Socket.io </a> Versión: 4.0.1
#### Express: Marco de aplicación web de back-end para Node.js
* <a href="https://expressjs.com/es/">Express.js </a> Versión: 4.17.1
#### EJS: Motor de plantilla que procesa páginas html en el servidor antes de servirlas al cliente
* <a href="https://ejs.co/">EJS </a> Versión: 3.1.6


# Consigna

<ul>
<li>El mensaje se envía del frontend hacia el backend, el cual lo almacenará en el base de datos. Luego cuando el cliente se conecte o envie un mensaje, recibirá un array de mensajes a representar en su vista.</li>
<li>El array debe estar normalizado con normalizr, conteniendo una entidad de autores. Considerar que el array tiene sus autores con su correspondiente id (mail del usuario), pero necesita incluir para el proceso de normalización un id para todo el array en su conjunto (podemos asignarle nosotros un valor fijo).</li>
<li>El frontend debería poseer el mismo esquema de normalización que el backend, para que este pueda desnormalizar y presentar la información adecuada en la vista.</li>
<li>Considerar que se puede cambiar el nombre del id que usa normalizr, agregando un tercer parametro a la función schema.Entity, por ejemplo: const schemaAuthor = new schema.Entity('author',{...},{idAttribute: 'email'});</li>
<li>En este schema cambia el nombre del id con que se normaliza el nombre de los autores a 'email'. Más info en la web oficial.</li>
</ul>

# Ver sitio online: 
<a href="https://chat-vintage.glitch.me/">Chat vintage en Glitch!</a>

# Diseñado y maquetado por:
<p>Made with 💖 by <a href="https://www.linkedin.com/in/dianaledist/">Diana Leonor Di Stefano</a></p>
<a href="https://www.facebook.com/Soy.Diana.Distefano">Facebook</a>
<a href="https://www.instagram.com/dianaledist/">Instagram</a>
<a href="https://github.com/dianaledist">Github</a>

