interface interfaceProducto {
    id: string;
    timestammp:Date;
    nombre: string;
    descripcion: string;
    codigo: number;
    foto: string;
    precio: number;
    stock: number;
 }  
 
  class Productos {
 
      constructor(public productos:interfaceProducto[]){}

      public prodBD(){
         return this.productos
      }
      
      addProduct(prod: interfaceProducto, io:any) {
         const {nombre, descripcion, codigo, foto, precio, stock} = prod
         const id: string = (this.productos.length + 1 ).toString();
         const timestammp: Date = new Date();
         const producto = {
           id,
           timestammp,
           nombre,
           descripcion,
           codigo,
           foto,
           precio,
           stock,
         }
         io.sockets.emit('products', producto)

         this.productos.push(producto)
      }
 
      getProducts() {
         let productoVista:any[] = this.productos///VER INTERFACE
         if(!this.productos.length) productoVista = [{error : "no hay productos cargados"}]
          return productoVista;
      }
 
      findOneProduct(id: string){
         let producto:any = this.productos.find((prod:any) => prod.id === id);///VER INTERFACE
         if (!producto) producto = {error : 'producto no encontrado'}
         return producto
      }
 
       updateProduct(prod: any, idn: string){
         const {timestammp, nombre, descripcion, codigo, foto, precio, stock} = prod
          const id = idn
          const productoAct = {
            id,
            timestammp,
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock,
          }
          let producto:any = this.productos.find((prod:any) => prod.id === id);///VER INTERFACE
          if (!producto) producto = {error : 'producto no encontrado'}
             else  {this.productos.splice(this.productos.indexOf(producto), 1,productoAct)
                      producto = productoAct
                  }
          return producto
     }
 
       delProduct(id: string){
       let producto:any = this.productos.find((prod) => prod.id === id);///VER INTERFACE///VER INTERFACE
       if (!producto) producto = {error : 'producto no encontrado'}
          else  this.productos.splice(this.productos.indexOf(producto), 1)
             
       return producto
     }
  }
  export default Productos;
  export {interfaceProducto};