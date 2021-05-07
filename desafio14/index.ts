const PORT=8080;

const express=require('express');
const app = express();
const path=require('path');
const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('fs').promises;

declare namespace Express {
    interface Request {
        user: any,
    }
    interface Response {
        sendFile: any;
        render: any;
        user: any,
    }
}

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface Producto {
    title: string,
    price: string, 
    thumbnail: string,
    id: number,
    socketid: string
}

interface Message {
    email: string,
    timestamp: string, 
    mensaje: string,
}

/* let producto: Producto = {
    title: "",
    price: "", 
    thumbnail: "",
    id: 0,
    socketid: ""
} */

let PRODUCTS_DB:Array<Producto> = [];
let CHAT_DB:Array<Message> = [];


app.use('/api', router);
app.get("/api/productos/vista", (req: Express.Request, res:Express.Response) => {
    res.render('../views/layout.ejs', { 
        title: "Datos de productos",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length!==0,
        message: CHAT_DB
       });
});

io.on('connection', (socket:any) => {
    socket.on('productos', (producto: Producto) => {
      io.emit('productos', producto);
      let newProducto: Producto = {
          title: producto.title,
          price: producto.price, 
          thumbnail: producto.thumbnail,
          id: PRODUCTS_DB.length + 1,
          socketid: socket.id
      };
      PRODUCTS_DB.push(newProducto)
      console.log(PRODUCTS_DB)
    });


    socket.on('cliente-mensaje', async (message:Message) => {
        io.emit('server-mensaje', message)
        let messageFile: Message = {
            email: message.email,
            timestamp: message.timestamp,
            mensaje: message.mensaje
        }
        CHAT_DB.push(messageFile)
        console.log("Mensajes totales back")
        console.log(CHAT_DB)
        try {
            await fs.writeFile(`messages.txt`, JSON.stringify(CHAT_DB))
		} catch(err) {
			console.log('Error en la escritura del archivo ❌', err.error)
		}
    })
})


app.use(express.static('public'))


app.get('*', (req:Express.Request, res:Express.Response) =>{
    res.sendFile(path.resolve('public/404.html'));
});

const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})


srv.on("error", (error?:string) => console.log(`Error en servidor ${error}`))
