import express from 'express';
import fs from 'fs';
const app = express();

app.get('/', (req,res) => {
    res.send(`<div style="background: rgb(233, 153, 206);"><h1 style="text-align: center;">Desafio 7</h1>
    <h2 style="text-align: center;">Diana Di Stefano - Backend Coderhouse</h2></div>
    <p>Consigna</p>
    <p>Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:
    </p>
    <ul>
    <li>Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }</li>
    <li>Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.txt'. <br>El formato de respuesta será: { item: {producto} }
    </li>
    <li>La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. <br>Contestar con el formato:  { visitas : { items: cantidad, item: cantidad } }</li>
    <li>Tomar los datos desde un array de productos almacenado como string en el archivo 'productos.txt'</li>
    </ul>`)
})

let visitasA = 0;
let visitasB = 0;

app.get('/items', (req,res) => {
    
    fs.readFile(`./archivos/productos.txt`, "utf-8", (err,data) =>{
        const dataParse= JSON.parse(data);
        ++visitasA;
        const productos = {
            items: dataParse,
            cantidad: dataParse.length
        }
        res.json(productos)
        console.log(productos)
    });
})

app.get('/item-random', (req,res) => {
    
    fs.readFile(`./archivos/productos.txt`, "utf-8", (err,data) =>{
        const dataParse= JSON.parse(data);
        ++visitasB;
        const item = dataParse[Math.floor(Math.random() * dataParse.length)];

        const productos = {
            item: item,
        }
        res.json(productos)
    });
})

app.get('/visitas', (req,res) => {
    
    const visitas = {visitas:{
        items:visitasA,
        item:visitasB
    }}
    res.send(visitas);
})

app.get('*', (req, res) =>{
    res.status(404).send('Página no encontrada😪');
  });

/* const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`)) */

export default app;