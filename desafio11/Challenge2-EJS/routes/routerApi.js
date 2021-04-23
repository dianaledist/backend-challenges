import express from 'express';
import  ProductoController  from '../controllers/Producto.js';
const app = express();

let PRODUCTS_DB = [];

const producto=new ProductoController();

app.set("views", "./views");
app.set("view engine", "ejs");

function crearRouterApi(){
    const routerApi = express.Router();

    routerApi.use(express.json());

    routerApi.get("/productos/vista", (req, res) => {
        const prods=producto.get();

        res.render('datosform.ejs', { 
            title: "Datos de productos",
            data: prods,
            existe: prods.length!==0
           });
    });

    routerApi.post("/productos/vista", (req, res) => {
        const data=req.body;
        const prods= producto.add(data);
        PRODUCTS_DB.push(prods);
        console.log(prods)

        res.render('datosform.ejs', { 
            title: "Datos de productos",
            data: prods,
            existe: true
           });
           
    });

    routerApi.get("/productos/vista/:id", (req, res) => {
        const { id } = req.params;
        const products_filter= producto.getById(id);
        if (products_filter){
            return res.json(products_filter)
        }
        res.status(404).json({
            error: 'Producto no encontrado 💔'
        });
    });

    routerApi.put("/productos/vista/:id", (req, res) => {
        const { id } =req.params;
        const data=req.body;
        
        if (!data) {
            return res.status(400).send("Error en los parámetros 🚫");
        }
        producto.update(id, data)
        return res.status(200).send(data)
    });

    routerApi.delete("/productos/vista/:id", (req, res) => {
        const { id } =req.params;
        if (!req.body) {
            return res.status(400).send("Error en los parámetros 🚫");
        }
        const PRODUCTS_DB_UPDATE=producto.remove(id);
        PRODUCTS_DB=PRODUCTS_DB_UPDATE
        return res.status(200).send(PRODUCTS_DB)
    });

    return routerApi;
}

export { crearRouterApi }