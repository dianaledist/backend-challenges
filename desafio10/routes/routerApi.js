import express from 'express';
import  ProductoController  from '../controllers/Producto.js';

let PRODUCTS_DB = [];

const producto=new ProductoController();

function crearRouterApi(){
    const routerApi = express.Router();

    routerApi.use(express.json());

    routerApi.get("/productos", (req, res) => {
        const prods=producto.get();
        if (!prods) {
            return res.status(404).json({
                error: 'No hay productos cargados ❌'
            });
        } else { 
            res.status(200).json(prods);
        }
    });

 
    routerApi.post("/productos", (req, res) => {
        const data=req.body;
        if (!data) {
            return res.status(400).send("Error en los parámetros 🚫");
        }
        producto.add(data);
        if (data.form==="1") return res.redirect("http://localhost:8080/api/productos")
        return res.status(200).send(data);
    });

    routerApi.get("/productos/:id", (req, res) => {
        const { id } = req.params;
        const products_filter= producto.getById(id);
        if (products_filter){
            return res.json(products_filter)
        }
        res.status(404).json({
            error: 'Producto no encontrado 💔'
        });
    });

    routerApi.put("/productos/:id", (req, res) => {
        const { id } =req.params;
        const data=req.body;
        
        if (!data) {
            return res.status(400).send("Error en los parámetros 🚫");
        }
        producto.update(id, data)
        return res.status(200).send(data)
    });

    routerApi.delete("/productos/:id", (req, res) => {
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
