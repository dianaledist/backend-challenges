const PORT = 8080;

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs').promises;

let PRODUCTS_DB = [];
let CHAT_DB = [];
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get("/api/productos/vista", (req, res) => {
    res.render('../views/layout.ejs', {
        title: "Datos de productos",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length !== 0,
        message: CHAT_DB
    });
});

io.on('connection', socket => {
    socket.on('productos', producto => {
        io.emit('productos', producto);
        newProducto = {
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            id: PRODUCTS_DB.length + 1,
            socketid: socket.id
        };
        PRODUCTS_DB.push(newProducto);
        console.log(PRODUCTS_DB);
    });

    socket.on('cliente-mensaje', async message => {
        io.emit('server-mensaje', message);
        let messageFile = {
            email: message.email,
            timestamp: message.timestamp,
            mensaje: message.mensaje
        };
        CHAT_DB.push(messageFile);
        console.log("Mensajes totales back");
        console.log(CHAT_DB);
        try {
            await fs.writeFile(`messages.txt`, JSON.stringify(CHAT_DB));
        } catch (err) {
            console.log('Error en la escritura del archivo ❌', err.error);
        }
    });
});

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/404.html'));
});

const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

srv.on("error", error => console.log(`Error en servidor ${error}`));
