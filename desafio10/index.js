import app from './src/main.js';
const PORT=8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))



import path from 'path';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine(
    "hbs", 
    handlebars({
        extname: ".hbs",
        defaultLayout: "layouts.hbs",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/partials",
}));

let PRODUCTS_DB = [];

app.set("views", "./views");
app.set("view engine", "hbs");
app.get("/productos/vista", (req, res) => {
    res.render("productos", {
        title: "Productos totales",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length !==0
    });
});

import  ProductoController  from './controllers/Producto.js';
const producto=new ProductoController();
app.post("/productos/vista", (req, res) => {
    const data=req.body;
    if (!data) {
        return res.status(400).send("Error en los parámetros 🚫");
    }
    producto.add(data);
    PRODUCTS_DB.push(data);
    res.render("productos", {
        title: "Productos totales",
        data: PRODUCTS_DB,
        existe: true
    });
});

app.put("/productos/vista/:id", (req, res) => {
    const { id } =req.params;
    const data=req.body;
    
    if (!data) {
        return res.status(400).send("Error en los parámetros 🚫");
    }
    producto.update(id, data)
    res.render("productos", {
        title: "Productos totales",
        data: PRODUCTS_DB,
        existe: true
    });
    /* return res.status(200).send(data) */
});

app.delete("/productos/vista/:id", (req, res) => {
    const { id } =req.params;
    if (!req.body) {
        return res.status(400).send("Error en los parámetros 🚫");
    }
    const PRODUCTS_DB_UPDATE=producto.remove(id);
    PRODUCTS_DB=PRODUCTS_DB_UPDATE
    return res.status(200).send(PRODUCTS_DB)

});


app.get('*', (req, res) =>{
    res.sendFile(path.resolve('public/404.html'))
    // res.status(404).send('Página no encontrada😪');
});