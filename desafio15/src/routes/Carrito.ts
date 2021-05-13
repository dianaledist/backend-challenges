import express from 'express';
import carrito from '../models/carrito';
import {interfaceCarrito} from '../models/carrito';
import {interfaceProducto} from '../models/producto';
const router = express.Router();
import fs from'fs';
 
router.use(express.json())

let timestamp: Date = new Date();
let id: string = timestamp.getTime().toString();
let producto: interfaceProducto[]=[];
let pedido:interfaceCarrito = {id,timestamp, producto};
 let prod = new carrito(pedido);
 
////////////Grabar Archivo/////////////////////
let pers = async (info:any) => {
    try {
        await fs.promises.writeFile('Carrito.txt',JSON.stringify(info))
    }
    catch (err) {
        console.log(err)
    }}
////////////////////////////////////////

 //////////Lee persistencia///////////////
 try {
  let carrtxt = fs.readFileSync('Carrito.txt', 'utf8')
  prod.carrito =  JSON.parse(carrtxt)

} catch (err) {
  console.error(err)
}

 router.get('/', async (_req,res) => {
   res.status(200).json(prod.getProducts())
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/:id', async (req,res) => {
   prod.addProduct(req.params.id)
   pers(prod.carrito)
   res.sendStatus(201)
 })
 
 router.delete('/:id',async (req,res) => {
    pers(prod.carrito)
   res.status(200).json(prod.delProduct(req.params.id))
 })
 
 
 module.exports = router;