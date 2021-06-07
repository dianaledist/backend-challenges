import express from 'express';
import  crearItemRouter  from './routes/item.routes.js';
import {PORT} from './config/index.js';

async function serverInit(){

const app = express();
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('../views/index.ejs', {
        title: "Desafío Backend 🚀"
    })
})

app.use('/api', await crearItemRouter());

app.get('*', (req, res) =>{
    res.render('../views/404.ejs', {
        title: "Error!! ❌"
    });
});


const srv=app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
});

srv.on("error", (error) => console.log(`Error en servidor ${error}`))

}

serverInit()