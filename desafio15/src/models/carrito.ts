import {interfaceProducto} from "./producto"
import fs from'fs';
interface interfaceCarrito {
    id: string;
    timestamp:Date;
    producto:interfaceProducto[];
 }  
  
  class carrito {
      producto: any;
 
      constructor(public carrito:interfaceCarrito,){      }

      getProducts() {
        let productoVista:any[] = []                 
        if(this.carrito) {productoVista = this.carrito.producto}///VER INTERFACE}
        if(!this.carrito || !this.carrito.producto.length) productoVista = [{error : "no hay productos cargados"}]
         return productoVista;
     }

     findOneProduct(id: string){
        let producto:any = this.carrito.producto.find((prod:any) => prod.id === id);///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
        return producto
     }

     addProduct(id: string) {
      ////////////////Archivo////////////
      let prodtxt:any
      try {
         prodtxt = JSON.parse(fs.readFileSync('Productos.txt', 'utf8'))
         } catch (err) {console.error(err) }
        //////////////////////////////

      let selProd = prodtxt.find((prod:any) => prod.id === id)
     
      //console.log("carrito.ts L37",id ,"filter", selProd)
     
      
     //   const producto:any = productos.findOneProduct(id)
        this.carrito.producto.push(selProd)
     }

     delProduct(id: string){
        let producto:any = this.carrito.producto.find((prod) => prod.id === id);///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
           else  this.carrito.producto.splice(this.carrito.producto.indexOf(producto), 1)
              
        return producto
      }
      
  }


   export default carrito;
   export {interfaceCarrito}