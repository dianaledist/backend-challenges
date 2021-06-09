import express from 'express';
const app = express();
import faker from 'faker';

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('../views/index.ejs', {
        title: "Desafío Backend 🚀"
    })
})

/* ----------------------- FAKER ----------------------- */

let productos = [ ];
let id=1
    //DESAFIO 22 - VISTA-TEST CON QUERY PARAMS
app.get('/productos/vista-test', (req, res) => {
    const { cant } = req.query;

    if(!cant) {
        for (let i = 0; i < 10; i++){
            const producto = {
                nombre: faker.commerce.productName(),
                precio: faker.commerce.price(),
                foto: faker.image.imageUrl(),
                id: id++
            }
            productos.push(producto);
        }
        res.render('../views/products.ejs', {
            data: productos,
            title: `Listado de ${cant} productos`
        })
        /* res.json(productos); */
        productos=[]
        id=1
    }

    if(cant == 0){
        const noProd = "No hay productos";
        res.json(noProd);
    }

    if(cant >= 1){
        console.log(`Cantidad = ${cant}`);
        for(let i = 0; i < cant; i++){
        const producto = {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            foto: faker.image.imageUrl()
        }
        productos.push(producto);  
        console.log(producto);
        }
        
        res.render('../views/products.ejs', {
            data: productos,
            title: `Listado de ${cant} productos`
        })
        /* res.json(productos); */
        productos=[]
    }
    
})

/* ----------------------- FAKER ----------------------- */


/* ----------------------- SERVER + DB CONNECTION ----------------------- */

app.listen(8080, ()=>{
    console.log('Servidor http escuchando en el puerto 8080 ⚡');
})

