import express from 'express';
import  ProductoController  from '../controllers/Producto.js';
import path from 'path';

let PRODUCTS_DB = [];

const producto=new ProductoController();

function crearRouterForm(){
    const routerForm = express.Router();

    routerForm.use(express.json());

    routerForm.get("/", (req, res) => {
        res.sendFile(path.resolve('public/views/home.html'))
    });

    return routerForm;
}

export { crearRouterForm }
