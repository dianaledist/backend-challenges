const PORT=8080;


const express=require('express');
const app = express();
const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

import fs from 'fs';
import {interfaceProducto} from './models/producto';
import Productos from './models/producto';
let prod = new Productos([]);

declare namespace Express {
    interface Request {
        method: any;
        url: any;
        user: any,
    }
    interface Response {
        status: any;
        sendFile: any;
        render: any;
        user: any,
    }
}

app.use('/productos',require('./routes/Producto'))
app.use('/carrito',require('./routes/Carrito'))

app.use('/api', router);
app.get('/api/productos/vista', (req: Express.Request, res:Express.Response) => {
    res.render('../views/layout.ejs', { 
        title: "Datos de productos",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length!==0,
        message: CHAT_DB
       });
});

let data:Array<interfaceProducto> =prod.getProducts()



 //////////Lee persistencia///////////////
 try {
    let prodtxt = fs.readFileSync('Productos.txt', 'utf8')
    data =  JSON.parse(prodtxt)
  
  } catch (err) {
    console.error(err)
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
  

app.get('/', (req:Express.Request, res:Express.Response) => {
    res.status(404).send(`error : -2, descripcion: ruta '${req.url}' metodo '${req.method}' no implementada`);
    });

app.get('/vista', (req: Express.Request, res:Express.Response) => {
    res.render('../views/index.ejs', { 
        title: "Productos",
        data: data
       });
});


console.log("data dsede index")
console.log(data)


let PRODUCTS_DB:Array<Producto> = [];
let CHAT_DB:Array<Message> = [];


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
            await fs.writeFileSync(`messages.txt`, JSON.stringify(CHAT_DB))
		} catch(err) {
			console.log('Error en la escritura del archivo ❌', err.error)
		}
    })
})

app.use(express.static('public'))


app.get('/vista', (req: Express.Request, res:Express.Response) => {
    res.render('../views/index.ejs', { 
        title: "Productos",
        data: data
       });
});

app.get('*', (req:Express.Request, res:Express.Response) =>{
    res.render('../views/404.ejs', {
        title: "Error!! ❌"
    });
});

const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

srv.on("error", (error?:string) => console.log(`Error en servidor ${error}`))
