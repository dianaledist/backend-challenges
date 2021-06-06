import express from 'express';
import  crearItemRouter  from './routes/item.routes.js';
import {PORT, mongoLocalURI} from './config/index.js';
import mongoose from 'mongoose';

mongoose.connect(mongoLocalURI, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(res => console.log(`Conexión a mongoose exitosa! ✨`))
    .catch(err => console.log(`Error en el servidor!! ❌ ${err}`));

const app = express();
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('../views/index.ejs', {
        title: "Desafío Backend 🚀"
    })
})

app.use('/api', crearItemRouter());

app.get('*', (req, res) =>{
    res.render('../views/404.ejs', {
        title: "Error!! ❌"
    });
});


const srv=app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
});

srv.on("error", (error) => console.log(`Error en servidor ${error}`))

