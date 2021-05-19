const PORT=8080;

const express=require('express');
const app = express();
const path=require('path');
const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('fs').promises;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//// Conexión con sqlite

import {sqlite3Connect} from "./DB/sqlite3.db"
const knex = require('knex')(sqlite3Connect);

//// Tipos de datos
declare namespace Express {
    interface Request {
        [x: string]: any;
        user: any,
    }
    interface Response {
        [x: string]: any;
        sendFile: any;
        render: any;
        user: any,
    }
}

//// Variables e interfaces
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

let PRODUCTS_DB:Array<Producto> = [];
let CHAT_DB:Array<Message> = [];


    const msgprueba = [
    {
        email: 'asdasd@gmail.com',
        timestamp: '20/05/2021 10:15:22',
        mensaje: 'Hola!'
    }
]
///// Crear tabla en sqlite

try {
    knex.schema.dropTableIfExists('chats')
    .then (() =>
        knex.schema.createTable('chats', (table: any) =>{
        table.string('email',100);
        table.string('timestamp', 20)
        table.string('mensaje',6000);
        })
    )        
    .then(() => console.log("Se creó la tabla chats"))
/*     .then(()=> knex('chats').insert(msgprueba))
    .then(()=> console.log("se agrego dato de prueba")) */
    .catch( (e: any) => console.log(e))
    .finally(()=>{
        knex.destroy()
    })

    knex.schema.dropTableIfExists('productos')
    .then (() => 
        knex.schema.createTable('productos', (table:any) =>{
        table.increments("id").primary();
        table.string('title', 20);
        table.integer('price').unsigned().notNullable();
        table.string('thumbnail',500);
        })
    )     
    .then(() => console.log("Se creó la tabla productos"))
    .catch( (e: any) => console.log(e))
    .finally(()=>{
        knex.destroy()
    })
        
} catch (error) {
    console.log("Error: ", error);
}

//// Definición de EJS y ruteos

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req: Express.Request, res:Express.Response) => {
    res.render('../views/index.ejs', {
        title: "Desafío Backend 🚀"
    })
})

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
      console.log('lista de productos',PRODUCTS_DB)

      try {
        knex('productos').insert({"title":newProducto.title, "price": newProducto.price, "thumbnail": newProducto.thumbnail, "id": newProducto.id})
        console.log("mensaje guardado en sqlite", newProducto)

        } catch {
            console.log('No pude grabar en sqlite ❌')
        }

    });


    socket.on('cliente-mensaje', async (message:Message) => {
        io.emit('server-mensaje', message)
        let messageFile: Message = {
            email: message.email,
            timestamp: message.timestamp,
            mensaje: message.mensaje
        }
        CHAT_DB.push(messageFile)
        console.log('lista de chat', CHAT_DB)

        try {
            await fs.writeFile(`messages.txt`, JSON.stringify(CHAT_DB))
            console.log('mensaje guardado en txt')
            
            try {
                knex('chats').insert({"email":messageFile.email, "timestamp": messageFile.timestamp, "mensaje": messageFile.mensaje})
                console.log("mensaje guardado en sqlite", {"email":messageFile.email, "timestamp": messageFile.timestamp, "mensaje": messageFile.mensaje})
            } catch {
                console.log('No pude grabar en sqlite ❌')
            }
            
		} catch(err) {
			console.log('Error en la escritura del archivo ❌', err.error)
		} 

    })
})



app.use(express.static('public'))

app.get('*', (req:Express.Request, res:Express.Response) =>{
    res.render('../views/404.ejs', {
        title: "Error!! ❌"
    });
});

const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})


srv.on("error", (error?:string) => console.log(`Error en servidor ${error}`))
