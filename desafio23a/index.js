const PORT=8080;

const express=require('express');
const app = express();
const path=require('path');
const router = express.Router();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs').promises;

const normalizr=require('normalizr');
const normalize=normalizr.normalize;
const denormalize=normalizr.denormalize;
const schema=normalizr.schema;

/* import { normalize, schema } from "normalizr"; */
const util=require("util")

const {sqlite3Connect} = require('./DB/sqlite3.db')
const knex=require('knex')(sqlite3Connect)

let CHAT_DB = [];
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('../views/index.ejs', { 
        title: "Chat vintage 🎮",
       });
});

app.use('/chat', router);
app.get("/chat", (req, res) => {
    res.render('../views/layout.ejs', { 
        title: "Chat vintage 🎮",
        message: CHAT_DB
       });
});

//Socket.io

io.on('connection', (socket) => {

    //CREAR TABLA
    /* try {
        return knex.schema.dropTableIfExists('messages')
        .then (() =>{
            return knex.schema.createTable('messages', table => {
                table.string('email').notNullable();
                table.string('nombre').notNullable();
                table.integer('edad').notNullable();
                table.string('timestamp', 50).notNullable();
                table.string('mensaje', 255).notNullable();
            })
        })        
        .then(() => console.log("Se creó la tabla productos"))
    } catch (error) {
        console.log("Error: ", error);
    } */


    /* let resultado;
    knex.from('messages').select("*")
    .then((rows)=> {
        for (row of rows) {
            resultado= JSON.stringify(`${row['email']} - ${row['nombre']} - ${row['edad']}- ${row['timestamp']} - ${row['mensaje']}`);
            console.log(resultado)
         }
    }).catch((err) => {console.log(err); throw err}) */

    socket.on('cliente-mensaje', async (message) => {
        io.emit('server-mensaje', message)
        let messageFile = {
            /* id: socket.id, */
            email: message.email,
            nombre: message.nombre,
            edad: message.edad,
            timestamp: message.timestamp,
            mensaje: message.mensaje
        }
        CHAT_DB.push(messageFile)
        console.log("Mensajes totales ingresados al back")
        /* console.log(CHAT_DB) */
        const porc1=JSON.stringify(CHAT_DB).length
        console.log('longitud chat sin normalizar',porc1)

        try {
            knex('messages').insert(CHAT_DB)
            .then(()=> console.log("Mensajes de chat guardados en sqlite3"))
            .then(()=>fs.writeFile(`messages.txt`, JSON.stringify(CHAT_DB)) )
            .then(()=> console.log("Mensajes de chat guardados en archivo"))
            .catch((error)=> console.log(error))

            function print(objeto){
                console.log(util.inspect(objeto, false,15,true))
            }
            const user= new schema.Entity("user", {}, {idAttribute: 'email'})
            const chatSchema=new schema.Entity("author", {
                author: user
            }, {idAttribute: 'email'})
            

            const normalizedData=normalize(CHAT_DB, [chatSchema]);
/*             console.log(normalizedData.result)
            console.log(normalizedData.entities) */
            print(normalizedData);
            const porc2=JSON.stringify(normalizedData).length
            console.log('longitud chat normalizada',porc2)

            const porcentaje= (porc2*100)/porc1
            console.log(`Porcentaje de compresión: ${porcentaje} %`)            
           
		} catch(err) {
			console.log('Error en la escritura del archivo ❌', err.error)
		}
    })
})



    

    

app.use(express.static('public'))

app.get('*', (req, res) =>{
    res.render('../views/404.ejs', { 
        title: "Error!! ❌",
       });
});

const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})

srv.on("error", error => console.log(`Error en servidor ${error}`))
